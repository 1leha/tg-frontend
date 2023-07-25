import { gql } from '@apollo/client';

// Users -------------------------------------------------
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

// Categories -------------------------------------------------
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
  mutation updateCategoty($fields: UpdateCategoryInput!) {
    updateCategory(updateCategoryInput: $fields) {
      id
      name
      dataCreated
    }
  }
`;

// Tasks -------------------------------------------------
export const CREATE_TASK = gql`
  mutation createTask($task: CreateTaskInput!) {
    createTask(createTaskInput: $task) {
      id
      name
      description
      dataStart
      dataEnd
      categoryId
    }
  }
`;
export const DELETE_TASK = gql`
  mutation deleteTask($taskId: Float!) {
    deleteTask(id: $taskId)
  }
`;
