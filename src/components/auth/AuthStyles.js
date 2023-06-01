import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 90%;
  min-height: calc(100vh - 130px);
  margin: 130px auto 0 auto;
`;

export const Container = styled.div`
  max-width: 500px;
  text-align: center;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 1.3em;
`;

export const Button = styled.button`
  display: inline-block;
  margin-top: 30px;
  width: 50%;
  padding: 10px;
  background-color: ${({ activeForm }) =>
    activeForm ? "var(--grey)" : "#ffffff"};
`;

export const AuthForm = styled.div`
  background-color: var(--grey);
  padding: 10px;
`;
