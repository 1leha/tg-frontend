import { RootState } from '../store';

export const sellectUserId = (state: RootState) => state.auth.id;
export const sellectEmail = (state: RootState) => state.auth.email;
export const sellectToken = (state: RootState) => state.auth.token;
export const sellectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const sellectIsRefreshing = (state: RootState) =>
  state.auth.isRefreshing;
