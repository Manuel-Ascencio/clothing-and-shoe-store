import React from "react";

import { HeroContainer, Preface, Slogan, Button } from "./HeroStyles";

const Hero = () => {
  const handleClick = () => {
    window.scroll({ top: window.innerHeight, left: 0, behavior: "smooth" });
  };
  return (
    <HeroContainer>
      <Preface>
        <Slogan>Men's and women's fashion</Slogan>
        <Button onClick={handleClick}>CATEGORIES</Button>
      </Preface>
    </HeroContainer>
  );
};

export default Hero;
