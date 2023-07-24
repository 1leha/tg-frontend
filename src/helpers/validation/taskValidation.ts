import * as yup from 'yup';

export const taskValidation = yup.object({
  name: yup.string().required('Name is required!'),
  description: yup
    .string()
    .max(128, 'Field must contain only 128 char!')
    .required('Description is required!'),
  startDate: yup.string().required('Start data is required!'),
  endDate: yup.string().required('End data is required!'),
});
