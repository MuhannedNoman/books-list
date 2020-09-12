import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_BOOKS } from '../../queries/Queries';
import BookDetails from '../BookDetails';

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
      <BookDetails />
    </div>
  );
};

export default BookList;
