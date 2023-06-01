import styled from "styled-components";
import image from "../../images/hero-image.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${image});
  background-size: cover;
  background-position: center;
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 2px 2px 4px black;
  margin-top: 100px;
`;

export const Preface = styled.div`
  width: 90%;
`;

export const Slogan = styled.h1`
  text-align: center;
  font-size: 1.6em;
  letter-spacing: 1px;
  font-weight: 600;
  width: 100%;

  @media only screen and (min-width: 769px) {
    font-size: 2.4em;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin: auto;
  border-radius: 1px;
  padding: 20px;
  margin-top: 30px;
  text-align: center;
  outline: none;
  background-color: var(--black);
  display: table-cell;
  vertical-align: middle;
  font-weight: 700;
  font-size: 0.9em;

  :hover {
    background-color: #1b1b1b;
  }

  @media only screen and (min-width: 769px) {
    font-size: 1em;
  }
`;
