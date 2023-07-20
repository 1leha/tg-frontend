import { gql } from '@apollo/client';

export const REGISTER_USER_MUTATION = gql`
  mutation registerUser($user: CreateUserInput!) {
    registerUser(registerUser: $user) {
      id
      email
      token
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation loginUser($user: LoginUserInput!) {
    loginUser(loginUser: $user) {
      id
      email
      token
    }
  }
`;

export const LOGOUT_USER_MUTATION = gql`
  mutation {
    logoutUser
  }
`;
