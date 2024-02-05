import { ActivityIndicator } from "react-native";
import theme from "../theme";

const Loader = ({ loading }) => {
  return loading ? (
    <ActivityIndicator size="large" color={theme.colors.primary} />
  ) : null;
};

export default Loader;
