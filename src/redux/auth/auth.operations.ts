import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAuth, IAuthState } from '../../helpers/interfaces/auth';

export const setAuthHeader = (token: String): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = (): void => {
  axios.defaults.headers.common.Authorization = '';
};

//Register
export const registerUser = createAsyncThunk<IAuth, IAuth>(
  'auth/register',
  (authData, _) => {
    const { token } = authData;
    setAuthHeader(token);
    return authData as IAuth;
  }
);

//Login
export const loginUser = createAsyncThunk<IAuth, IAuth>(
  'auth/login',
  (authData, _) => {
    const { token } = authData;
    setAuthHeader(token);
    return authData as IAuth;
  }
);

//Logout
export const logout = createAsyncThunk('auth/logout', (__, _) => {
  clearAuthHeader();
});

//Refresh
export const refresh = createAsyncThunk<IAuth, IAuthState>(
  'auth/refresh',
  (user, _) => {
    console.log('refresh user :>> ', user);
    return user as IAuth;
  }
);
