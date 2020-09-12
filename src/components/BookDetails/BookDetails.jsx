import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_BOOK } from '../../queries/Queries';

const BookDetails = () => {
  const { loading, error, data } = useQuery(GET_BOOK);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div id="book-details">
      <p>Detail here</p>
    </div>
  );
};

export default BookDetails;
