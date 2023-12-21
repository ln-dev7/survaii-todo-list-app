import { gql } from '@apollo/client';

export const CREATE_TODO = gql`
  mutation CreateTodo($todo: CreateTodo!) {
    createTodo(todo: $todo) {
      id
      userID
      title
      description
      imageURL
      completed
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($todo: UpdateTodo!) {
    updateTodo(todo: $todo) {
      id
      userID
      title
      description
      imageURL
      completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      success
    }
  }
`;
