import { gql, useQuery } from '@apollo/client';
import React from 'react';

export const GET_BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error :(</p>;

  const books = data.books.map((book) => {
    return <li key={book.id}>{book.name}</li>;
  });

  return (
    <div>
      <ul id="book-list">{books}</ul>
    </div>
  );
};

export default BookList;
