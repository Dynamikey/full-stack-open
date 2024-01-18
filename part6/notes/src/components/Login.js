import { useNavigate } from "react-router-dom";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";

const Login = (props) => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    props.onLogin("michaelzhao");
    navigate("/");
  };

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={onSubmit}>
        <FormGroup label="username:">
          <InputGroup id="username" />
        </FormGroup>
        <FormGroup label="password:">
          <InputGroup id="password" type="password" />
        </FormGroup>
        <Button type="submit">login</Button>
      </form>
    </div>
  );
};

export default Login;
