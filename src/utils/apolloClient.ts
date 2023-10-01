import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedinVariable = makeVar(false);

export const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedinVariable();
            },
          },
        },
      },
    },
  }),
});
