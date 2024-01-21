import { View, StyleSheet } from "react-native";
import Text from "./Text";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.background,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
  },
  tab: {
    flexGrow: 0,
    color: "white",
    paddingLeft: 15,
  },
});

const AppBarTab = ({ text }) => {
  return (
    <View>
      <Text fontSize="subHeading" fontWeight="bold" style={styles.tab}>
        {text}
      </Text>
    </View>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories" />
      <AppBarTab text="Another tab name" />
    </View>
  );
};

export default AppBar;
