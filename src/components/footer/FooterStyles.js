import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: var(--black);
  color: var(--white);
`;

export const FooterContainer = styled.div`
  white-space: wrap;
  width: 90%;
  margin: auto;
  padding: 30px 0;
  display: grid;
  font-size: 0.8em;
  font-weight: 300;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;

  @media screen and (min-width: 768px) {
    font-size: 0.9em;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }
`;

export const Notice = styled.p`
  width: 100%;
  padding-right: 20px;
`;

export const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;

  @media screen and (min-width: 768px) {
    white-space: wrap;
    width: 100%;
  }
`;

export const ListItem = styled.li`
  list-style-type: square;
`;

export const Copyright = styled.div`
  align-self: center;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 100%;
    grid-column: 1 / 3;
  }
`;
