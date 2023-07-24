import { format } from 'date-fns';

export const formatDate = (date: string | Date) =>
  format(Date.parse(String(date)), 'dd.MM.yyyy');
