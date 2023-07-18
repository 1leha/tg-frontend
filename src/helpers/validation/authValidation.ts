import * as yup from 'yup';

export const authValidationSchema = yup.object({
  email: yup
    .string()
    .required('E-mail is required!')
    .matches(
      /^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$/,
      'Input valid e-mail!'
    ),
  password: yup.string().required('Password is required!'),
});
