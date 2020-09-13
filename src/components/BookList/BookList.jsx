import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { GET_BOOKS } from '../../queries/Queries';
import BookDetails from '../BookDetails';

const BookList = () => {
  const [bookId, setBookId] = useState(null);

  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error :(</p>;

  const books = data.books.map((book) => {
    return (
      <li
        onClick={() => {
          setBookId(book.id);
        }}
        key={book.id}
      >
        {book.name}
      </li>
    );
  });

  return (
    <div>
      <ul id="book-list">{books}</ul>
      <BookDetails id={bookId} />
    </div>
  );
};

export default BookList;
