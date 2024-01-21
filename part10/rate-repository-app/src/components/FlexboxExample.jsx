import { View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  flexContainer: {
    // display: "flex",
    display: "flex",
  },
  flexItemA: {
    flexGrow: 0,
    flexShrink: 0,
    backgroundColor: "green",
  },
  flexItemB: {
    flexGrow: 1,
    backgroundColor: "blue",
  },
});

const FlexboxExample = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <> */}
      <View style={styles.flexItemA}>
        <Text>Flex item A</Text>
      </View>
      <View style={styles.flexItemB}>
        <Text>Flex item B</Text>
      </View>
      {/* </> */}
    </View>
  );
};

export default FlexboxExample;
