import styled from "styled-components";

export const Container = styled.div`
  whidth: 100%;
  text-align: center;
  background-color: var(--white);
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

export const HeaderContainer = styled.header`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin: auto;
  svg {
    font-size: 25px;
  }

  @media only screen and (min-width: 769px) {
    .movil {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  font-family: "Bungee Shade", cursive;

  a {
    font-size: 1.5em;
  }

  @media only screen and (min-width: 769px) {
    a {
      font-size: 2em;
    }
  }
`;

export const Ul = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  left: ${({ open }) => (open ? "0" : "-100%")};
  padding: 15px 0;
  background-color: var(--white);
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  flex-direction: column;
  transition: left 0.5s ease;
  svg {
    position: absolute;
    right: 30px;
    top: 30px;
  }

  .Orders {
    display: ${({ ordersId }) => (ordersId === "" ? "none" : "inline-block")};
  }

  @media only screen and (min-width: 769px) {
    width: 60%;
    margin-left: -10%;
    display: inline;
    position: static;
    padding: 0 0;
  }
`;

export const Li = styled.li`
  font-weight: 400;
  margin: 15px 0;
  position: relative;

  a {
    font-size: 1.2em;
  }

  .active {
    font-weight: 600;
  }

  @media only screen and (min-width: 769px) {
    margin: 0 15px;
    display: inline-block;

    :last-child {
      position: absolute;
      max-width: 18%;
      right: 10%;
    }

    a {
      display: inline-block;
      font-size: 1.3em;
    }

    a:hover::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0%;
      border-bottom: 2px solid var(--black);
      width: 100%;
    }

    a::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0%;
      transition: width 0.5s ease-in-out;
      border-bottom: 2px solid var(--black);
    }

    .active {
      font-weight: 500;
      ::after {
        width: 100%;
      }
    }
  }
`;

export const LogoutUser = styled.div`
  @media only screen and (min-width: 769px) {
    display: flex;
    align-items: center;
  }
`;

export const Logout = styled.div`
  font-size: 1.1em;
  cursor: pointer;
  background-color: var(--black);
  color: var(--white);
  padding: 5px;
  border-radius: 1px;
  margin-right: 10px;
`;

export const UserEmail = styled.div`
  background-color: #ffffff;
  padding: 5px;

  @media only screen and (min-width: 769px) {
    max-width: 80%;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
    white-space: nowrap;
  }
`;

export const Login = styled.div`
  min-width: 80px;
  cursor: pointer;
  background-color: var(--black);
  color: var(--white);
  padding: 5px;
  border-radius: 1px;

  @media only screen and (min-width: 769px) {
    font-size: 0.8em;
  }
`;
