import React from "react";
import { Link } from "react-router-dom";

import { NotFoundContainer, Message, Return } from "./NotFoundStyles";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Message>The page you are trying to access does not exist</Message>
      <Return>
        Click <Link to="/">here</Link> to go back to the homepage.
      </Return>
    </NotFoundContainer>
  );
};

export default NotFound;
