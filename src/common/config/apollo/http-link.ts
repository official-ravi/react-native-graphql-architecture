import { HttpLink } from '@apollo/client/link/http';

export function createHttpLink() {
  return new HttpLink({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  });
}
