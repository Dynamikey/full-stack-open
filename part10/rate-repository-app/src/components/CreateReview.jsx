import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import * as yup from "yup";
import { Pressable, View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "space-evenly",
    padding: 15,
    gap: 15,
  },
  formTextInput: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
  },
  createReviewButton: {
    padding: 15,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    borderRadius: 5,
  },
});

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.formTextInput}
        name="repositoryOwnerName"
        placeholder="Repository owner name"
        placeholderTextColor="grey"
      />
      <FormikTextInput
        style={styles.formTextInput}
        name="repositoryName"
        placeholder="Repository name"
        placeholderTextColor="grey"
      />
      <FormikTextInput
        style={styles.formTextInput}
        name="rating"
        placeholder="Rating between 0 and 100"
        placeholderTextColor="grey"
      />
      <FormikTextInput
        style={styles.formTextInput}
        name="review"
        placeholder="Review"
        placeholderTextColor="grey"
        multiline
      />
      <Pressable style={styles.createReviewButton} onPress={onSubmit}>
        <Text fontWeight="bold" style={{ color: "white" }}>
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

const initialValues = {
  repositoryOwnerName: "",
  repositoryName: "",
  rating: "",
  review: "",
};
const validationSchema = yup.object({
  repositoryOwnerName: yup
    .string()
    .required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .required("Rating is required")
    .integer()
    .min(0, "rating should be greater than 0")
    .max(100, "rating should be less than 100"),
  review: yup.string(),
});

const CreateReview = () => {
  const onSubmit = () => {
    console.log("hello world");
  };
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default CreateReview;
