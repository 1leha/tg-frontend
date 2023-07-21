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
    }
  }
`;

export const GET_CURRENT_USER_CATEGORIES = gql`
  query {
    getCurrentUserCategories {
      id
      name
    }
  }
`;

export const GET_USER_CATEGORIES = gql`
  query getUserCategoriesQuery($id: Float!) {
    categories(id: $id) {
      id
      name
    }
  }
`;
