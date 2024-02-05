import { gql } from "@apollo/client";
export const CORE_REPOSITORY_FIELDS = gql`
  fragment CoreRepositoryFields on Repository {
    id
    fullName
    forksCount
    description
    language
    name
    ratingAverage
    reviewCount
    stargazersCount
    ownerAvatarUrl
  }
`;
