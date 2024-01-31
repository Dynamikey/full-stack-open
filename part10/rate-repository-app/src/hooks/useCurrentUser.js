import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/queries";

const useCurrentUser = () => {
  const { data, error, loading } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: "cache-and-network",
  });
  console.log(`data: ${data}`);

  return {
    isLoggedIn: !!data?.me?.id,
    error,
    loading,
  };
};

export default useCurrentUser;
