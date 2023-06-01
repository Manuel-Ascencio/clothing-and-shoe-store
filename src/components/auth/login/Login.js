import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../api/api";
import { setSelectForm } from "../../../redux/slices/authSlice";

import {
  LoginContainer,
  Form,
  Input,
  Button,
  MessageError,
  MessageHelp,
} from "./LoginStyles";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (auth.id) {
      navigate("/selected-products");
    }
  }, [auth.id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(user));
  };

  const handleClick = (form) => {
    dispatch(setSelectForm(form));
  };
  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button>
          {auth.loginStatus === "pending" ? "Submitting" : "Login"}
        </Button>
        {auth.loginStatus === "rejected" ? (
          <MessageError>{auth.loginError}</MessageError>
        ) : null}
        <MessageHelp onClick={() => handleClick("register")}>
          You do not have an account ?
        </MessageHelp>
      </Form>
    </LoginContainer>
  );
};

export default Login;
