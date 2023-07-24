import { InferType } from 'yup';
import { taskValidation } from '../validation/taskValidation';

export interface ITasks {
  name: string;
  description?: string;
  startDate: Date;
  endDate: Date;
}

export type TTaskValues = InferType<typeof taskValidation>;
