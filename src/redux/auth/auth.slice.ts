import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../../helpers/interfaces/auth';
import {
  loginUser,
  logout,
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
      .addCase(registerUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.id = payload.id;
        state.email = payload.email;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      // Login
      .addCase(loginUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.id = payload.id;
        state.email = payload.email;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      // Logout
      .addCase(logout.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logout.fulfilled, state => {
        state.id = initialAuthState.id;
        state.email = initialAuthState.email;
        state.token = initialAuthState.token;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      });

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
