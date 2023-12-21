import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      userID
      title
      description
      imageURL
      completed
    }
  }
`;

export const GET_TODO = gql`
  query GetTodo($id: Int!) {
    todo(id: $id) {
      id
      userID
      title
      description
      imageURL
      completed
    }
  }
`;
