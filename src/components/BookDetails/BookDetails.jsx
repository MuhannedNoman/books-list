import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_BOOK } from '../../queries/Queries';

const BookDetails = ({ id }) => {
  const { loading, error, data } = useQuery(GET_BOOK, { variables: { id } });

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error :(</p>;

  const bookDetail = () => {
    const { book } = data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {book.author.books.map((book) => (
              <li key={book.id}>{book.name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected...</div>;
    }
  };

  return <div id="book-details">{bookDetail()}</div>;
};

export default BookDetails;
