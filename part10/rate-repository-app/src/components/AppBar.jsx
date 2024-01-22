import { View, StyleSheet } from "react-native";
import Text from "./Text";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";
import { TouchableWithoutFeedback } from "react-native-web";

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
      <AppBarTab link="*" text="Repositories" />
      <AppBarTab link="signin" text="SignIn" />
    </View>
  );
};

export default AppBar;
