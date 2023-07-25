import { InferType } from 'yup';
import { taskValidation } from '../validation/taskValidation';
import { ICategory } from './categories';

export interface ITasksInput {
  name: string;
  description?: string;
  startDate: Date;
  endDate: Date;
}

export interface ITaskResponse {
  id?: number;
  name?: string;
  description?: string;
  dataStart?: Date;
  dataEnd?: Date;
  category?: ICategory;
}

export type TTaskValues = InferType<typeof taskValidation>;
