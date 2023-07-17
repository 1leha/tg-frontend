import { Navigate } from 'react-router-dom';

export interface IRoutesProps {
  element: JSX.Element;
  redirectTo: string;
}

export const PrivateRoute = ({
  redirectTo = '/',
  element: Element,
}: IRoutesProps) => {
  const token = Number(process.env.REACT_APP_TOKEN_MOCK);

  const shouldRedirect = !token;

  return shouldRedirect ? <Navigate to={redirectTo} replace /> : Element;
};
