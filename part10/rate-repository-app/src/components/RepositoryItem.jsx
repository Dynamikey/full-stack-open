import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { Button } from "react-native";
import { Pressable } from "react-native";
import * as Linking from "expo-linking";

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
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    margin: 10,
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    padding: 15,
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

const RepositoryItem = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
  url,
  singleItem,
}) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.tab}>
          <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
        </View>
        <View style={styles.tab}>
          <Text fontWeight="bold">{fullName}</Text>
          <Text>{description}</Text>
          <Text style={styles.languageLogo}>{language}</Text>
        </View>
      </View>
      <View style={styles.containerStats}>
        <RepositoryItemStat name="Stars" stat={stargazersCount} />
        <RepositoryItemStat name="Forks" stat={forksCount} />
        <RepositoryItemStat name="Reviews" stat={reviewCount} />
        <RepositoryItemStat name="Rating" stat={ratingAverage} />
      </View>
      {singleItem && (
        <View>
          <Pressable style={styles.button} onPress={() => Linking.openURL(url)}>
            <Text style={styles.buttonText} fontWeight="bold">
              Open in GitHub
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default RepositoryItem;
