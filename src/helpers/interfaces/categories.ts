export interface ILength {
  length?: number;
}
export interface ICategory {
  id?: number;
  name?: string;
  userId?: number;
  dataCreated?: string;
  tasks?: ILength;
}
