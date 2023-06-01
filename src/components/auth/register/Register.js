import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../../api/api";

import {
  RegisterContainer,
  Form,
  Input,
  Button,
  MessageError,
} from "./RegisterStyles";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registerUser(user));
  };

  return (
    <RegisterContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
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
          {auth.registerStatus === "pending" ? "Submitting" : "Register"}
        </Button>
        {auth.registerStatus === "rejected" ? (
          <MessageError>{auth.registerError}</MessageError>
        ) : null}
      </Form>
    </RegisterContainer>
  );
};

export default Register;
