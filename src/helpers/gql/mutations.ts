import { gql } from '@apollo/client';

export const RegisterUserMutation = gql`
  mutation registerUser($user: CreateUserInput!) {
    registerUser(registerUser: $user) {
      id
      email
      token
    }
  }
`;
export const LoginUserMutation = gql`
  mutation loginUser($user: LoginUserInput!) {
    loginUser(loginUser: $user) {
      id
      email
      token
    }
  }
`;
