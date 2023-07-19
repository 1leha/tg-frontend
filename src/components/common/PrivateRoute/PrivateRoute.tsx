import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../helpers/hooks/useAuth';

export interface IRoutesProps {
  element: JSX.Element;
  redirectTo: string;
}

export const PrivateRoute = ({
  redirectTo = '/',
  element: Element,
}: IRoutesProps) => {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? <Navigate to={redirectTo} replace /> : Element;
};
