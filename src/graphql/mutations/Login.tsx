import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      ok
      id
      token
      error
    }
  }
`;
