import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShoppingBag from "../shopping-bag/ShoppingBag";
import { FaBars, FaTimes } from "react-icons/fa";
import { logoutUser } from "../../redux/slices/authSlice";

import {
  Container,
  HeaderContainer,
  Logo,
  Ul,
  Li,
  LogoutUser,
  Logout,
  UserEmail,
  Login,
} from "./HeaderStyles";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [ordersId, setOrdersId] = useState("");

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    setOrdersId(auth.id);
  }, [auth]);

  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen(!open);
    window.scroll({ top: 0, behavior: "smooth", duration: 2000 });
  };

  return (
    <Container>
      <HeaderContainer>
        <FaBars className="movil" onClick={() => setOpen(!open)} />
        <Logo>
          <NavLink to="/" onClick={handleClick}>
            Luxe
          </NavLink>
        </Logo>
        <Ul open={open} ordersId={ordersId}>
          <FaTimes className="movil" onClick={() => setOpen(!open)} />
          <Li>
            <NavLink to="/" activeclassname="active" onClick={handleClick}>
              Home
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/shop-men"
              activeclassname="active"
              onClick={handleClick}
            >
              Men
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/shop-women"
              activeclassname="active"
              onClick={handleClick}
            >
              Women
            </NavLink>
          </Li>
          <Li className="Orders">
            <NavLink
              to="/orders"
              activeclassname="active"
              onClick={handleClick}
            >
              Orders
            </NavLink>
          </Li>
          <Li>
            {auth.id ? (
              <LogoutUser>
                <Logout
                  onClick={() => {
                    dispatch(logoutUser(null));
                  }}
                >
                  Logout
                </Logout>
                <UserEmail>{auth.email}</UserEmail>
              </LogoutUser>
            ) : (
              <Login>
                <Link to="/auth" onClick={handleClick}>
                  Login
                </Link>
              </Login>
            )}
          </Li>
        </Ul>
        <ShoppingBag />
      </HeaderContainer>
    </Container>
  );
};

export default Header;
