export interface ICredentials {
  email: string;
  password: string;
}

export interface IAuth {
  id: number;
  email: string;
  token: string;
}

export interface IAuthState {
  id?: null | number;
  email?: null | string;
  token?: null | string;
  isLoggedIn?: boolean;
  isRefreshing?: boolean;
}
