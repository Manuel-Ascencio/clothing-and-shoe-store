import styled from "styled-components";

export const OrdersContainer = styled.div`
  width: 90%;
  min-height: calc(100vh - 130px);
  margin: 130px auto 0 auto;
`;

export const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-align: center;

  @media only screen and (min-width: 769px) {
    text-align: start;
  }
`;

export const EmptyOrdersMessage = styled.div`
  margin-top: 30px;
  text-align: center;
`;

export const Message = styled.p`
  a {
    color: #0000ff;
  }
`;

export const OrdersTable = styled.table`
  max-width: 350px;
  margin: auto;
  margin-top: 30px;

  @media only screen and (min-width: 769px) {
    min-width: 100%;
  }
`;

export const OrdersTableHead = styled.thead`
  display: none;

  @media only screen and (min-width: 769px) {
    display: block;
    font-size: 1.1em;
  }
`;

export const OrdersTableRow = styled.tr`
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

export const OrdersTableHeader = styled.th``;

export const OrdersTableBody = styled.tbody`
  width: 100%;
`;

export const OrdersTableCell = styled.td`
  border: 1px solid var(--grey);
  padding: 10px;

  @media only screen and (min-width: 769px) {
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

export const ProductName = styled.h3`
  font-size: 1.2em;
  font-weight: 600;

  @media only screen and (min-width: 769px) {
    margin-left: 10px;
    font-size: 1.1em;
    font-weight: 400;
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
