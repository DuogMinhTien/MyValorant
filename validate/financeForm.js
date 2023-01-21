import * as yup from 'yup';

export const FINANCE_FORM_FIELD = {
  TYPE: 'filter_type_id',
  PROVINCE_ID: 'province_id',
  DISTRICT_ID: 'district_id',
  CATEGORY: 'category_id',
  MAX_PRICE: 'max_price',
  MIN_PRICE: 'min_price',
  WARD_ID: 'ward_id',
};

export const schemaFinance = yup.object().shape({
  [FINANCE_FORM_FIELD.MIN_PRICE]: yup.string(),
  [FINANCE_FORM_FIELD.MAX_PRICE]: yup
    .string()
    .test([FINANCE_FORM_FIELD.MAX_PRICE], 'Số tiền không hợp lệ', (value, context) => {
      if (!value) return true;
      return +value.replace(/,/g, '') > +context.parent[FINANCE_FORM_FIELD.MIN_PRICE].replace(/,/g, '');
    }),
});
