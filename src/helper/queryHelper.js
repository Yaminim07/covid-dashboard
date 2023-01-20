import { GraphQLClient, gql } from 'graphql-request';

const API_ENDPOINT = 'https://covid19-graphql.netlify.app/';

const graphQLClient = new GraphQLClient(API_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
});

const fetchData = (query, variables = {}, cfg = {}) => async () => graphQLClient.request(gql`${query}`, { ...variables }, { ...cfg });

export default fetchData;
