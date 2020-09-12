import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { GET_BOOKS } from '../BookList/BookList';

const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

const AddBook = () => {
  const formDataObject = {
    name: '',
    genre: '',
    authorId: '',
  };

  const [formData, setFormData] = useState(formDataObject);

  const { loading, error, data } = useQuery(GET_AUTHORS);

  const [addBook, { error: mutationError }] = useMutation(ADD_BOOK);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({
      variables: {
        name: formData.name,
        genre: formData.genre,
        authorId: formData.authorId,
      },
      refetchQueries: [{ query: GET_BOOKS }],
    });
    !mutationError && setFormData(formDataObject);
  };

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error :(</p>;

  let authors = data.authors.map((author) => {
    return (
      <option value={author.id} key={author.id}>
        {author.name}
      </option>
    );
  });

  return (
    <form onSubmit={handleSubmit} id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        ></input>
      </div>

      <div className="field">
        <label>Genre:</label>
        <input
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          type="text"
        ></input>
      </div>

      <div className="field">
        <label>Author:</label>
        <select
          name="authorId"
          value={formData.authorId}
          onChange={handleChange}
        >
          <option value="" hidden={true}>
            Select author
          </option>
          {authors}
        </select>
      </div>

      <input type="submit" value="+" />
    </form>
  );
};

export default AddBook;
