import { gql } from '@apollo/client';

export const GET_CURRENT_USER_QUERY = gql`
  query {
    getCurrentUser {
      id
      email
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query {
    getAllCategories {
      id
      name
      userId
      user {
        id
        email
      }
      task {
        id
        name
      }
    }
  }
`;
