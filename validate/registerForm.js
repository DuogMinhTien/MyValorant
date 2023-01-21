import * as yup from 'yup';

const phoneRegExp = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

export const REGISTER_FORM_FIELD = {
  NAME: 'name',
  PHONE: 'phone',
  ADDRESS: 'address',
};

export const schemaRegister = yup.object().shape({
  [REGISTER_FORM_FIELD.NAME]: yup
    .string()
    .min(6, 'Kí tự tối thiểu 6')
    .max(40, 'Kí tự tối đa 40')
    .required('Không được bỏ trống trường này'),
  [REGISTER_FORM_FIELD.PHONE]: yup
    .string()
    .matches(phoneRegExp, 'Số điện thoại không hợp lệ')
    .max(10, 'Kí tự tối đa 10')
    .required('Không được bỏ trống trường này'),
  [REGISTER_FORM_FIELD.ADDRESS]: yup.string().max(190, 'Kí tự tối đa 190').required('Không được bỏ trống trường này'),
});
