import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import BookList from './components/BookList';
import { CLIENT_LINK } from './env';

const client = new ApolloClient({
  uri: CLIENT_LINK,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
};

export default App;
