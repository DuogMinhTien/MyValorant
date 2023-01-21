import * as yup from 'yup';

export const LOCATION_FORM_FIELD = {
  PROVINCE_ID: 'province_id',
  DISTRICT_ID: 'district_id',
  WARD_ID: 'ward_id',
  CATEGORY_ID: 'category_id',
};

export const schemaLocation = yup.object().shape({
  [LOCATION_FORM_FIELD.PROVINCE_ID]: yup.object(),
  [LOCATION_FORM_FIELD.DISTRICT_ID]: yup.object(),
  [LOCATION_FORM_FIELD.WARD_ID]: yup.object(),
  [LOCATION_FORM_FIELD.CATEGORY_ID]: yup.object(),
});
