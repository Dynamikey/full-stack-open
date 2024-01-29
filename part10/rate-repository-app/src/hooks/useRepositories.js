import { useEffect, useState } from "react";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);
    const response = await fetch("http://192.168.1.247:5000/api/repositories");
    const json = await response.json();
    console.log(json);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: useRepositories };
};

export default useRepositories;
