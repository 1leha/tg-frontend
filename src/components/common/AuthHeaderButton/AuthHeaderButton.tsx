import { Button, IconButton } from '@mui/material';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { logout } from '../../../redux/auth/auth.operations';
import { useMutation } from '@apollo/client';
import { LOGOUT_USER_MUTATION } from '../../../helpers/gql/mutations';
import { EAuthButtons } from '../../../helpers/enums/authButtons';
import LogoutIcon from '@mui/icons-material/Logout';

export const AuthHeaderButton = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const [logoutUser, { client }] = useMutation(LOGOUT_USER_MUTATION);

  const handlerLogout = async () => {
    await logoutUser();
    await dispatch(logout());
    localStorage.clear();
    client.resetStore();
  };

  switch (pathname) {
    case '/register':
      return (
        <Button
          color="inherit"
          component={NavLink}
          to={EAuthButtons.login.toLowerCase()}
        >
          {EAuthButtons.login}
        </Button>
      );

    case '/login':
      return (
        <Button
          color="inherit"
          component={NavLink}
          to={EAuthButtons.register.toLowerCase()}
        >
          {EAuthButtons.register}
        </Button>
      );

    default:
      return (
        <IconButton
          size="small"
          color="inherit"
          component={NavLink}
          to={EAuthButtons.logout.toLowerCase()}
          onClick={handlerLogout}
        >
          <LogoutIcon />
        </IconButton>
      );
  }
};
