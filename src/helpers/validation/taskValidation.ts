import * as yup from 'yup';

export const taskValidation = yup.object({
  name: yup.string().required('Name is required!'),
  description: yup.string().max(120),
  startDate: yup.date().required('Start data is required!'),
  endDate: yup.date().required('End data is required!'),
});
