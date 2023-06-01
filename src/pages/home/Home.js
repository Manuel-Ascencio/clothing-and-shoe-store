import React from "react";
import { useNavigate } from "react-router-dom";

import Hero from "../../components/hero/Hero";
import {
  Shops,
  WomenFashion,
  MenFashion,
  Img,
  Text,
  Button,
} from "./HomeStyles";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = (category) => {
    navigate(category);
    window.scroll({ top: 0, behavior: "smooth", duration: 2000 });
  };
  return (
    <>
      <Hero />
      <Shops>
        <WomenFashion>
          <Img
            src="https://res.cloudinary.com/dssbz0thm/image/upload/v1675397822/women%27s%20products/women_s-fashion_u7avaz.png"
            alt="women-fashion"
          />
          <Text>Women Fashion</Text>
          <Button onClick={() => handleClick("/shop-women")}>
            See Products
          </Button>
        </WomenFashion>
        <MenFashion>
          <Img
            src="https://res.cloudinary.com/dssbz0thm/image/upload/v1675397799/men%27s%20products/men_s-fashion_xwm5wh.png"
            alt="men-fashion"
          />
          <Text>Men Fashion</Text>
          <Button onClick={() => handleClick("/shop-men")}>See Products</Button>
        </MenFashion>
      </Shops>
    </>
  );
};

export default Home;
