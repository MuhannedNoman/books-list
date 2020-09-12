import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';

const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

const AddBook = () => {
  const [formData, setFormData] = useState({
    bookName: '',
    genre: '',
    authorId: '',
  });

  const { loading, error, data } = useQuery(GET_AUTHORS);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
          name="bookName"
          value={formData.bookName}
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
        <select name="authorId" onChange={handleChange}>
          <option hidden={true}>Select author</option>
          {authors}
        </select>
      </div>

      <input type="submit" value="+" />
    </form>
  );
};

export default AddBook;
