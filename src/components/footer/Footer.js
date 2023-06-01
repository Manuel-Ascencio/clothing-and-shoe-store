import React from "react";

import {
  Container,
  FooterContainer,
  Copyright,
  Notice,
  List,
  ListItem,
} from "./FooterStyles";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <FooterContainer>
        <Notice>
          This website is for demonstration purposes only and is used for
          educational purposes. Prices and availability may change without
          notice and the accuracy of the information contained on this website
          is not guaranteed. The terms and conditions applicable to this
          demonstrative store are as follows:
        </Notice>
        <List>
          <ListItem>
            This website is for demonstration purposes only and has no
            commercial purposes.
          </ListItem>
          <ListItem>
            By using this website, you acknowledge that LUXE Store is not
            responsible for any damages resulting from the use of this website.
          </ListItem>
          <ListItem>
            The use of this website implies acceptance of these terms and
            conditions.
          </ListItem>
        </List>
        <Copyright>Copyright {year}, LUXE Store</Copyright>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
