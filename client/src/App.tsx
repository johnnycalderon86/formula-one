import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
//component
import Circuits from './components/Circuits'
//------------------------------------
const client = new ApolloClient({
  uri: 'http://localhost:4001/graphql-f1',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>

      <div className="App">
        <h1>F1-Fans</h1>
        <Circuits />
      </div>
    </ApolloProvider>
  );
}

export default App;
