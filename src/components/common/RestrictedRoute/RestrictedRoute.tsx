import { Navigate } from 'react-router-dom';

export interface IRoutesProps {
  element: JSX.Element;
  redirectTo: string;
}

export const RestrictedRoute = ({
  redirectTo = '/',
  element: Element,
}: IRoutesProps) => {
  const token = 1;
  const shouldRedirect = token;

  return shouldRedirect ? <Navigate to={redirectTo} replace /> : Element;
};
