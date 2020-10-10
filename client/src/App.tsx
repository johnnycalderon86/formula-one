import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
//component
import Circuits from './components/Circuits'
import { StartPage } from './components/StartPage';
import { Home } from './components/Home';
import { About } from './components/About';
import { Teams } from './components/Teams';
import { Drivers } from './components/Drivers';
//------------------------------------
const client = new ApolloClient({
  uri: 'http://localhost:4001/graphql-f1',
  cache: new InMemoryCache(),
});

const App = () => {
  const location = useLocation();
  return (
    <div>


      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <StartPage />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/circuits">
            <ApolloProvider client={client}>
              <Circuits />
            </ApolloProvider>
          </Route>
          <Route exact path="/teams">
            <Teams />
          </Route>
          <Route exact path="/drivers">
            <Drivers />
          </Route>
        </Switch>
      </AnimatePresence>

    </div>
  );
}

export default App;
