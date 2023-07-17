import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

export const AppRouter = () => {
  const appRouts = useRoutes(routes);
  return appRouts;
};
