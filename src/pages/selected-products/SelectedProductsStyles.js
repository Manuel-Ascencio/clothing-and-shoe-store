import styled from "styled-components";

export const SelectedProductsContainer = styled.div`
  width: 90%;
  min-height: calc(100vh - 130px);
  margin: 130px auto 30px auto;
`;

export const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-align: center;

  @media only screen and (min-width: 769px) {
    text-align: start;
  }
`;

export const EmptySelectedProductsMessage = styled.div`
  margin-top: 30px;
  text-align: center;
`;

export const Message = styled.p`
  a {
    color: #0000ff;
  }
`;

export const ProductsTable = styled.table`
  max-width: 350px;
  margin: auto;
  margin-top: 30px;

  @media only screen and (min-width: 769px) {
    min-width: 100%;
  }
`;

export const ProductsTableHead = styled.thead`
  display: none;

  @media only screen and (min-width: 769px) {
    display: block;
    font-size: 1.1em;
  }
`;

export const ProductsTableRow = styled.tr`
  margin: 30px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--grey);
  position: relative;

  @media only screen and (min-width: 769px) {
    margin: 0;
    text-align: start;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;
    width: 100%;
    border-top: none;
    border-bottom: 1px solid var(--grey);
    border-right: none;
    border-left: none;
    display: grid;
    grid-template-columns: 50% repeat(auto-fit, minmax(0, 1fr));
    grid-auto-flow: column;
    justify-items: start;
  }
`;

export const ProductsTableHeader = styled.th``;

export const ProductsTableBody = styled.tbody`
  width: 100%;
`;

export const ProductsTableCell = styled.td`
  border: 1px solid var(--grey);
  padding: 10px 0;

  :nth-child(1) {
    padding-top: 0;
  }

  :nth-child(2) {
    display: none;
  }

  :nth-child(3) {
    position: absolute;
    padding: 0;
  }

  @media only screen and (min-width: 769px) {
    :nth-child(2) {
      display: block;
    }
    :nth-child(3) {
      display: none;
    }
    border: none;
    padding: 0;
    a {
      display: flex;
      align-items: center;
      max-width: 100%;
    }

    :nth-child(3) {
      font-weight: 600;
    }
  }
`;

export const ProductImage = styled.img`
  background-color: var(--grey);
  max-width: 100%;
  padding: 10px;

  @media only screen and (min-width: 769px) {
    max-width: 150px;
  }
`;

export const ProductName = styled.h3`
  font-size: 1.2em;
  font-weight: 600;

  @media only screen and (min-width: 769px) {
    margin-left: 10px;
    font-size: 1.1em;
    font-weight: 400;
  }
`;

export const Remove = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  color: var(--white);
  cursor: pointer;
  top: 0;
  svg {
    color: var(--black);
    width: 100%;
    height: 100%;
  }
`;

export const Icon = styled.div`
  @media only screen and (min-width: 769px) {
    display: flex;
    width: auto;
    font-size: 30px;
    color: var(--black);
    height: 100%;

    svg {
      cursor: pointer;
    }
  }
`;

export const Text = styled.p`
  display: inline;
  margin-right: 10px;
  font-weight: 600;
  font-size: 1.1em;

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

export const TotalContainer = styled.div`
  border-bottom: 1px solid var(--grey);
  border-top: 1px solid var(--grey);
  text-align: center;
  font-size: 1.2em;
  font-weight: 600;
  padding: 10px 0;
  max-width: 350px;
  margin: auto;

  @media only screen and (min-width: 769px) {
    max-width: 100%;
    margin-top: 10px;
  }
`;

export const Total = styled.span`
  @media only screen and (min-width: 769px) {
    margin: auto;
    display: block;
    max-width: 90%;
    text-align: end;
  }
`;

export const CheckoutContainer = styled.div`
  max-width: 350px;
  margin: auto;

  @media only screen and (min-width: 769px) {
    max-width: 90%;
    display: flex;
    justify-content: flex-end;
    text-align: end;
  }
`;

export const Checkout = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px auto 0 auto;
  cursor: pointer;
  background-color: var(--black);
  color: var(--white);
  font-size: 1.2em;

  :hover {
    background-color: #1b1b1b;
  }

  @media only screen and (min-width: 769px) {
    margin: 10px 0;
    width: 200px;
    right: 0;
  }
`;

export const PaymentMethods = styled.div`
  max-width: 350px;
  margin: auto;
  text-align: center;

  @media only screen and (min-width: 769px) {
    max-width: 90%;
    display: flex;
    justify-content: flex-end;
    text-align: end;
  }
`;

export const Img = styled.img`
  width: 50px;
  margin: 10px 10px 0 10px;
  @media only screen and (min-width: 769px) {
    margin: 10px 0 0 10px;
  }
`;
