import { gql } from "@apollo/client";
export const CORE_REPOSITORY_FIELDS = gql`
  fragment CoreRepositoryFields on Repository {
    fullName
    forksCount
    description
    language
    name
    ratingAverage
    reviewCount
    stargazersCount
  }
`;
