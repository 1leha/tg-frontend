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
