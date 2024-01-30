import { Pressable, View, StyleSheet } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { Formik } from "formik";
import theme from "../theme";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";

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

const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup
    .string()
    .min(8, "password needs to be at least 8 characters")
    .required(),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
