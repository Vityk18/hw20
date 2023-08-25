import React, { useState } from "react";
import styled from "styled-components";
import "./signUp.css";
import Padlock from "../components/padlock/padlock.js";

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  background-color: transparent;
  border: 1px solid ${(props) => props.color || "#777777"};
  transition: all ease 0.3s;
  width: 48%;
  color: #fff;
  border-radius: 5px;
  border-color: ${(props) =>
    props.isInvalid ? "red" : props.isValid ? "green" : "gray"};
  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.isInvalid ? "red" : props.isValid ? "green" : "gray"};
  }
`;
const InputFirstName = styled(Input)`
d
`;

const InputLastName = styled(Input)`
float: right

`;

const InputEmail = styled(Input)`
  width: 100%;
  border-color: ${(props) =>
    props.isInvalid ? "red" : props.isValid ? "green" : "gray"};
  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.isInvalid ? "red" : props.isValid ? "green" : "gray"};
  }
`;
const InputPass = styled(Input)`
  width: 100%;

  border-color: ${(props) =>
    props.isInvalid ? "red" : props.isValid ? "green" : "gray"};
  &:focus {
    border-color: ${(props) =>
      props.isInvalid ? "red" : props.isValid ? "green" : "gray"};
  }
`;

const SignIn = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

  const onChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const onChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const onChangeEmail = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    validateEmail(inputValue);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/;
    setIsEmailInvalid(!emailPattern.test(email));
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    validatePassword(event.target.value);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    setIsPasswordInvalid(!passwordPattern.test(password));
  };

  return (
    <div className="signInBody">
      <div>
        <Padlock />
      </div>
      <div>
        <h1 style={{ color: "#fff", textAlign: "center" }}>Sign up</h1>
      </div>

      <div className="input">
        <div>
          <InputFirstName
            type="text"
            placeholder="First name *"
            value={firstName}
            onChange={onChangeFirstName}
            isValid={firstName.length > 2}
          />
          <InputLastName
            type="text"
            placeholder="Last name *"
            value={lastName}
            onChange={onChangeLastName}
            isValid={lastName.length > 2}
          />
        </div>

        <InputEmail
          type="email"
          placeholder="Email Address *"
          value={email}
          onChange={onChangeEmail}
          isInvalid={isEmailInvalid}
          isValid={!isEmailInvalid && email !== ""}
        />
        <InputPass
          type="password"
          placeholder="Password *"
          value={password}
          onChange={onChangePassword}
          isInvalid={isPasswordInvalid}
          isValid={!isPasswordInvalid && password !== ""}
        />
      </div>

      <div className="rememberMe">
        <input type="checkbox" />I want to receive inspiration, marketing
        promotions and updates via email.
      </div>
      <div>
        <button className="button" type="submit">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default SignIn;
