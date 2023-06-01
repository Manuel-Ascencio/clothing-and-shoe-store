import styled from "styled-components";

export const RegisterContainer = styled.div``;

export const Form = styled.form``;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  outline: none;
`;

export const Button = styled.button`
  margin: 10px auto;
  background-color: var(--black);
  color: var(--white);
  width: 100px;
  font-size: 1.1em;
  padding: 10px;
  cursor: pointer;
  border-radius: 1px;

  :hover {
    background-color: #1b1b1b;
  }
`;

export const MessageError = styled.p`
  font-size: 1rem;
  color: #e74c3c;
`;
