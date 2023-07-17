import { Categories } from '../components/Categories';
import { Layout } from '../components/common';
import { PrivateRoute } from '../components/common/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from '../components/common/RestrictedRoute/RestrictedRoute';
import { LoginPage, RegistrationPage, TaskPage } from '../pages';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <PrivateRoute redirectTo="register" element={<TaskPage />} />,
        children: [
          {
            path: '/',
            element: (
              <PrivateRoute redirectTo="register" element={<Categories />} />
            ),
          },
          {
            path: ':categoryId',
            element: (
              <PrivateRoute
                redirectTo="register"
                element={<div>Task List</div>}
              />
            ),
          },
        ],
      },
      {
        path: 'login',
        element: <RestrictedRoute redirectTo="/" element={<LoginPage />} />,
      },
      {
        path: 'register',
        element: (
          <RestrictedRoute redirectTo="/" element={<RegistrationPage />} />
        ),
      },
    ],
  },
];
