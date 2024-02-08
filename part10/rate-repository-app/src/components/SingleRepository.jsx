import { FlatList } from "react-native";
import ReviewItem from "./ReviewItem";
import RepositoryItem from "./RepositoryItem";
import ItemSeparator from "./ItemSeparator";

const SingleRepository = (repository) => {
  console.log(repository);
  const reviewNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];
  console.log(reviewNodes);
  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem {...repository} />}
    />
  );
};

export default SingleRepository;
