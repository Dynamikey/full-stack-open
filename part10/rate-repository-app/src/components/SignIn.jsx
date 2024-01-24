import { Pressable, View, StyleSheet } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { Formik } from "formik";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    minHeight: 200,
    justifyContent: "space-evenly",
  },
  formTextInput: {
    marginHorizontal: 25,
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "grey",
  },
  signInButton: {
    marginHorizontal: 25,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.formTextInput}
        name="username"
        placeholder="Username"
        placeholderTextColor="grey"
      />
      <FormikTextInput
        style={styles.formTextInput}
        name="password"
        placeholder="Password"
        placeholderTextColor="grey"
        secureTextEntry={true}
      />
      <Pressable style={styles.signInButton} onPress={onSubmit}>
        <Text fontWeight="bold" style={{ color: "white" }}>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
