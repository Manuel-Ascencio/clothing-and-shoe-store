import styled from "styled-components";

export const SingleProductContainer = styled.div`
  width: 90%;
  margin: 100px auto 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 769px) {
    margin: 100px auto 0 auto;
    flex-direction: row;
    text-align: start;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  margin: 30px auto;
  padding: 30px;
  background-color: var(--grey);

  @media only screen and (min-width: 769px) {
    text-align: end;
    width: 50%;
    height: calc(100vh - 160px);
  }
`;

export const ProductImg = styled.img`
  max-height: 500px;

  @media only screen and (min-width: 769px) {
    max-width: 500px;
    max-height: 100%;
  }
`;

export const ProductFeature = styled.div`
  max-width: 500px;
  border-style: double;
  border-width: 3px;
  border-color: var(--black);

  @media only screen and (min-width: 769px) {
    border-style: none;
    max-width: 50%;
  }
`;

export const ProductName = styled.h3`
  font-size: 1.3em;
  font-weight: 600;
  margin: 10px: 0;
`;

export const ProductPrice = styled.span`
  font-size: 1.3em;
  font-weight: 600;
  margin: 10px 0;
`;

export const ProductDescription = styled.p`
  margin: 10px 0;
`;

export const ProductInfo = styled.div`
  margin: 10px 30px;
`;

export const AddToBagSection = styled.div`
  margin: 10px 0;
`;

export const ProductQuantity = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const ToSubtract = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  background-color: var(--black);
  color: var(--white);

  :hover {
    background-color: #1b1b1b;
  }
`;

export const Quantity = styled.span`
  padding: 10px 20px;
  background-color: #ffffff;
`;

export const ToAdd = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  background-color: var(--black);
  color: var(--white);

  :hover {
    background-color: #1b1b1b;
  }
`;

export const AddToBag = styled.button`
  margin: auto;
  padding: 10px;
  width: 60%;
  cursor: pointer;
  background-color: var(--black);
  color: var(--white);

  :hover {
    background-color: #1b1b1b;
  }
`;
