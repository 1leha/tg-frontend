import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAuth } from '../../helpers/interfaces/auth';

const setAuthHeader = (token: String): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = (): void => {
//   axios.defaults.headers.common.Authorization = '';
// };

//Register user
export const registerUser = createAsyncThunk<IAuth, IAuth>(
  'auth/register',
  (authData, _) => {
    console.log('authData :>> ', authData);

    const { token } = authData;
    setAuthHeader(token);
    return authData as IAuth;
  }
);
