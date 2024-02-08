import { View, StyleSheet } from "react-native";
import Text from "./Text";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";
import { ScrollView, TouchableWithoutFeedback } from "react-native-web";
import useCurrentUser from "../hooks/useCurrentUser";
import useSignOut from "../hooks/useSignOut";

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

const AppBarTab = ({ link, text, onPress }) => {
  return (
    <Link to={link} component={<TouchableWithoutFeedback />} onPress={onPress}>
      <Text fontSize="subHeading" fontWeight="bold" style={styles.tab}>
        {text}
      </Text>
    </Link>
  );
};

const AppBar = () => {
  const { isLoggedIn } = useCurrentUser();
  const [signOut] = useSignOut();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab link="*" text="Repositories" />
        {!isLoggedIn && <AppBarTab link="signin" text="Sign In" />}
        {isLoggedIn && <AppBarTab link="/createreview" text="Create Review" />}
        {isLoggedIn && (
          <AppBarTab link="/" text="Sign Out" onPress={() => signOut()} />
        )}
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
