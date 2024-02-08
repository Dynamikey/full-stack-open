import { StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";
import moment from "moment";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
  },
  containerText: { flex: 1, gap: 8 },
  rating: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text fontWeight="bold" color="primary">
          {review.rating}
        </Text>
      </View>
      <View style={styles.containerText}>
        <Text fontWeight="bold">{review.user.username}</Text>
        <Text color="secondary">
          {moment(review.createdAt).format("DD.MM.yyyy")}
          {/* {format(parseISO(review.createdAt), "dd.mm.yyyy")} */}
        </Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
