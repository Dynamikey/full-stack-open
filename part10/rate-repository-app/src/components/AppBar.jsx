import { View, StyleSheet } from "react-native";
import Text from "./Text";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";
import { ScrollView, TouchableWithoutFeedback } from "react-native-web";

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

const AppBarTab = ({ link, text }) => {
  return (
    <Link to={link} component={<TouchableWithoutFeedback />}>
      <Text fontSize="subHeading" fontWeight="bold" style={styles.tab}>
        {text}
      </Text>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab link="*" text="Repositories" />
        <AppBarTab link="signin" text="Sign In" />
        <AppBarTab text="test" />
        <AppBarTab text="test 2" />
        <AppBarTab text="test 3" />
        <AppBarTab text="test 4" />
        <AppBarTab text="test 5" />
        <AppBarTab text="test 6" />
        <AppBarTab text="test 7" />
        <AppBarTab text="test 8" />
        <AppBarTab text="test 9" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
