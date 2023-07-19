import { Button } from '@mui/material';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { logout } from '../../../redux/auth/auth.operations';

export enum EAuthButtons {
  login = 'Login',
  register = 'Register',
  logout = 'Logout',
}

export const AuthHeaderButton = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const handlerLogout = () => {
    dispatch(logout());
  };

  switch (pathname) {
    case '/register':
      return (
        <Button
          color="inherit"
          component={NavLink}
          to={EAuthButtons.login.toLocaleLowerCase()}
        >
          {EAuthButtons.login}
        </Button>
      );

    case '/login':
      return (
        <Button
          color="inherit"
          component={NavLink}
          to={EAuthButtons.register.toLocaleLowerCase()}
        >
          {EAuthButtons.register}
        </Button>
      );

    default:
      return (
        <Button
          color="inherit"
          component={NavLink}
          to={EAuthButtons.logout.toLocaleLowerCase()}
          onClick={handlerLogout}
        >
          {EAuthButtons.logout}
        </Button>
      );
  }
};
