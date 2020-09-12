import { gql } from '@apollo/client';

export const GET_BOOK = gql`
  query Book($id: ID) {
    book(id: $id) {
      name
      id
      genre
      author {
        name
        id
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

export const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export const GET_BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`;
