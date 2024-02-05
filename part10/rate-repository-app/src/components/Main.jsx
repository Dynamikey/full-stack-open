import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";

import AppBar from "./AppBar";
import theme from "../theme";
import { Navigate, Route, Routes, useParams } from "react-router-native";
import SignIn from "./SignIn";
import RepositoryItem from "./RepositoryItem";
import { useEffect, useState } from "react";
import useRepository from "../hooks/useRepository";
import Loader from "./Loader";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flex: 1,
  },
});

const FetchRepositoryItem = () => {
  const { repositoryId } = useParams();
  const { repository, loading } = useRepository(repositoryId);
  if (loading) {
    return <Loader loading />;
  }
  return <RepositoryItem {...repository} />;
};

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/repository/:repositoryId"
          element={<FetchRepositoryItem />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
