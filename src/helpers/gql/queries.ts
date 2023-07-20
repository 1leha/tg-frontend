import { gql } from '@apollo/client';

export const getCurrentUserQuery = gql`
  query {
    getCurrentUser {
      id
      email
    }
  }
`;
