import { gql } from "@apollo/client";
import { CORE_REPOSITORY_FIELDS } from "./fragments";

export const GET_REPOSITORIES = gql`
  ${CORE_REPOSITORY_FIELDS}
  query {
    repositories {
      edges {
        node {
          ...CoreRepositoryFields
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  ${CORE_REPOSITORY_FIELDS}
  query Repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      url
      ...CoreRepositoryFields
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query {
    me {
      id
      username
    }
  }
`;
