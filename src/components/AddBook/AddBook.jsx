import { gql, useQuery } from '@apollo/client';
import React from 'react';

const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

const AddBook = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Shoul use Mutation');
  };

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error :(</p>;

  let authors = data.authors.map((author) => {
    return <option key={author.id}>{author.name}</option>;
  });

  return (
    <form onSubmit={handleSubmit} id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input type="text"></input>
      </div>

      <div className="field">
        <label>Genre:</label>
        <input type="text"></input>
      </div>

      <div className="field">
        <label>Author:</label>
        <select>
          <option hidden={true}>Select author</option>
          {authors}
        </select>
      </div>

      <input type="submit" value="+" />
    </form>
  );
};

export default AddBook;
