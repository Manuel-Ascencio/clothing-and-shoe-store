import styled from "styled-components";

export const ShopWomenContainer = styled.div`
  width: 90%;
  margin: 100px auto 30px auto;

  @media only screen and (min-width: 1020px) {
    display: flex;
  }
`;

export const Category = styled.div`
  @media only screen and (min-width: 1020px) {
    width: 30%;
    margin: 30px 0;
    height: calc(100vh - 120px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  font-size: 1.6em;
  font-weight: 600;
  text-align: center;

  @media only screen and (min-width: 1020px) {
    font-size: 1.8em;
    height: 10%;
  }
`;

export const Women = styled.div`
  display: none;
  width: 100%;
  height: 90%;
  padding: 10px;
  background-color: var(--grey);

  @media only screen and (min-width: 1020px) {
    display: block;
  }
`;

export const ProductsContainer = styled.div`
  margin: 30px 0;
  @media only screen and (min-width: 1020px) {
    width: 70%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProductsTypes = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const ProductType = styled.li`
  cursor: pointer;
  position: relative;
  font-size: 1em;

  :hover::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    border-bottom: 2px solid var(--black);
    width: 100%;
  }

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    border-bottom: 2px solid var(--black);
    transition: width 0.5s ease-in-out;
    width: ${({ selected }) => (selected ? "100%" : "0")};
  }
  font-weight: ${({ selected }) => (selected ? "600" : "400")};
`;

export const Products = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Product = styled.div`
  cursor: pointer;
  width: 200px;
  height: 300px;
  margin: 20px;
  a {
    width: 100%;
    height: 100%;
  }
`;

export const ProductImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 75%;
  padding: 10px;
  background-color: var(--grey);
`;

export const ProductName = styled.h3`
  font-weight: 300;
`;

export const ProductPrice = styled.span`
  display: block;
  font-weight: bold;
`;
