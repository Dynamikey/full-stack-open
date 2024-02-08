import { StyleSheet, FlatList, View, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import { useEffect, useState } from "react";
import TouchableRepositoryItem from "./TouchableRepositoryItem";
import ItemSeparator from "./ItemSeparator";

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <TouchableRepositoryItem item={item} />}
    />
  );
};

export default RepositoryList;
