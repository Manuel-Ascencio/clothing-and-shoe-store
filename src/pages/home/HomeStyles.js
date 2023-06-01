import styled from "styled-components";

export const Shops = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 15px 0;
`;

export const WomenFashion = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
  margin: 15px;
  background-color: var(--grey);
`;

export const MenFashion = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
  margin: 15px;
  background-color: var(--grey);
`;

export const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Text = styled.p`
  position: absolute;
  font-weight: 600;
  font-size: 1.3em;
  top: 30%;
  right: 0;
  left: 0;
  text-align: center;
  margin-top: 50px;
  color: var(--white);
`;

export const Button = styled.button`
  position: absolute;
  cursor: pointer;
  displey: flex;
  right: 0;
  left: 0;
  bottom: 0;
  height: 50px;
  background-color: var(--black);
  color: var(--white);

  :hover {
    background-color: #1b1b1b;
  }
`;
