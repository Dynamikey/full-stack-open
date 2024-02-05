import { Pressable } from "react-native";
import { useState } from "react";
import RepositoryItem from "./RepositoryItem";
import { useNavigate } from "react-router-native";
import useRepository from "../hooks/useRepository";

const TouchableRepositoryItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Pressable
      onPress={() => {
        navigate(`/repository/${item.id}`);
      }}
    >
      <RepositoryItem {...item} />
    </Pressable>
  );
};

export default TouchableRepositoryItem;
