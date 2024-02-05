import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (repositoryId) => {
  const { data, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: {
      id: repositoryId,
    },
  });

  return {
    repository: data?.repository,
    loading,
    refetch: useRepository,
  };
};

export default useRepository;
