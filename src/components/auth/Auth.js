import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectForm } from "../../redux/slices/authSlice";

import {
  AuthContainer,
  Container,
  AuthForm,
  Title,
  Button,
} from "./AuthStyles";
import Login from "./login/Login";
import Register from "./register/Register";

const Auth = () => {
  const auth = useSelector((state) => state.auth);
  const activeForm = useSelector((state) => state.auth.activeForm);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    if (auth.id) {
      navigate("/selected-products");
    }
  }, [auth.id, navigate]);

  const handleClick = (form) => {
    dispatch(setSelectForm(form));
  };
  return (
    <AuthContainer>
      <Container>
        <Title>{activeForm === "login" ? "Login" : "Register"}</Title>
        <Button
          activeForm={activeForm === "login"}
          onClick={() => handleClick("login")}
        >
          Login
        </Button>
        <Button
          activeForm={activeForm === "register"}
          onClick={() => handleClick("register")}
        >
          Register
        </Button>
        <AuthForm>{activeForm === "login" ? <Login /> : <Register />}</AuthForm>
      </Container>
    </AuthContainer>
  );
};

export default Auth;
