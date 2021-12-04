import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createApolloClient } from './common/config/apollo-client';
import Routes from './routes';


const apolloClient = createApolloClient();

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
