import styled from "styled-components";

export const Bag = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 1.5em;
  }

  @media only screen and (min-width: 769px) {
    svg {
      font-size: 1.5em;
    }
  }
`;

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-left: -10px;
  background-color: var(--black);
  color: var(--white);
`;
