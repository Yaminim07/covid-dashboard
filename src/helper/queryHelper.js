import { GraphQLClient, gql } from 'graphql-request';

const API_ENDPOINT = 'https://covid19-graphql.netlify.app/';

const graphQLClient = new GraphQLClient(API_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
});

export const fetchData = (query) => async () => graphQLClient.request(gql`${query}`);
export const fetchAllCountry = (query) => async () => graphQLClient.request(gql`${query}`);
