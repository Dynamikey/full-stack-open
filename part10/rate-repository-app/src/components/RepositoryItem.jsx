import { View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
  },
  containerStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
  },
  tab: {
    paddingTop: 10,
    paddingLeft: 10,
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  tabStats: {
    alignItems: "center",
  },
  languageLogo: {
    backgroundColor: theme.colors.primary,
    color: "white",
    padding: 5,
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
  },
});

const formatNumber = (number) => {
  if (number >= 1000) {
    return `${Math.round((number / 1000) * 10) / 10}k`;
  }
  return number;
};

const RepositoryItemStat = ({ name, stat }) => {
  return (
    <View style={styles.tabStats}>
      <Text fontWeight="bold">{formatNumber(stat)}</Text>
      <Text>{name}</Text>
    </View>
  );
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.tab}>
          <Text style={styles.image}>Image</Text>
        </View>
        <View style={styles.tab}>
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text>{item.description}</Text>
          <Text style={styles.languageLogo}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.containerStats}>
        <RepositoryItemStat name="Stars" stat={item.stargazersCount} />
        <RepositoryItemStat name="Forks" stat={item.forksCount} />
        <RepositoryItemStat name="Reviews" stat={item.reviewCount} />
        <RepositoryItemStat name="Rating" stat={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
