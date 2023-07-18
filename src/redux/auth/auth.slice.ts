import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../../helpers/interfaces/auth';
import {
  // login,
  // logout,
  // refresh,
  registerUser,
} from './auth.operations';

const initialAuthState: IAuthState = {
  id: null,
  email: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {},

  extraReducers: builder => {
    builder

      // Register
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        console.log('payload :>> ', payload);
        state.id = payload.id;
        state.email = payload.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      });

    // Login
    //   .addCase(login.fulfilled, (state, { payload }) => {
    //     state.isLoggedIn = true;
    //     state.token = payload.token;
    //     state.user = payload.user;
    //   })

    // Logout
    //   .addCase(logout.pending, state => {
    //     state.isRefreshing = true;
    //   })
    //   .addCase(logout.fulfilled, state => {
    //     state.isLoggedIn = false;
    //     state.token = null;
    //     state.user = { name: null, email: null };
    //     state.isRefreshing = false;
    //   })

    // Refresh
    //   .addCase(refresh.pending, state => {
    //     state.isRefreshing = true;
    //   })
    //   .addCase(refresh.fulfilled, (state, { payload }) => {
    //     state.isLoggedIn = true;
    //     state.user = payload;
    //     state.isRefreshing = false;
    //   })
    //   .addCase(refresh.rejected, state => {
    //     state.isRefreshing = false;
    //     state.token = null;
    //   });
  },
});

export const authReducer = authSlice.reducer;
