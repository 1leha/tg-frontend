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

export const CREATE_CATEGORY = gql`
  mutation createCategory($category: CreateCategoryInput!) {
    createCategory(createCategoryInput: $category) {
      id
      name
      dataCreated
      userId
      user {
        id
        email
      }
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation deleteCategory($id: Float!) {
    deleteCategory(id: $id)
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation updateCategoty($data: UpdateCategoryInput!) {
    updateCategory(updateCategoryInput: $data) {
      id
      name
      dataCreated
    }
  }
`;
