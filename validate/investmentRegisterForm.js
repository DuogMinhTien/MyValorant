import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const INVESTMENT_REGISTRATION_FORM = {
  NAME: 'name',
  PHONE: 'phone',
  ADDRESS: 'address',
  PROJECT: 'project_id',
};

export const schemaInvestment = yup.object().shape({
  [INVESTMENT_REGISTRATION_FORM.NAME]: yup.string().required('Vui lòng nhập họ tên!'),
  [INVESTMENT_REGISTRATION_FORM.PHONE]: yup
    .string()
    .required('Vui lòng nhập số điện thoại!')
    .matches(phoneRegExp, 'Số điện thoại không hợp lệ'),
  [INVESTMENT_REGISTRATION_FORM.PROJECT]: yup.object().required('Vui lòng chọn dự án đầu tư đầu tư!'),
});
