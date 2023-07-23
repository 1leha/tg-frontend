import { Categories } from '../components/Categories';
import { Tasks } from '../components/Tasks';
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
        element: <PrivateRoute redirectTo="login" element={<TaskPage />} />,
        children: [
          {
            path: '/',
            element: (
              <PrivateRoute redirectTo="login" element={<Categories />} />
            ),
          },
          {
            path: ':categoryId',
            element: <PrivateRoute redirectTo="login" element={<Tasks />} />,
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
