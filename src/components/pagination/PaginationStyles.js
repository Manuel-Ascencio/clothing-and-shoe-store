import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  button {
    margin: 5px 0;
  }
`;

export const Pages = styled.ul`
  display: ${({ totalPages }) => (totalPages > 1 ? "flex" : "none")};
`;

export const Page = styled.li`
  margin: 0 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 1px;
  min-width: 40px;
  height: 40px;
  background-color: ${({ currentPage, page }) =>
    currentPage === page ? "var(--black)" : "#ffffff"};
  color: ${({ currentPage, page }) =>
    currentPage === page ? "var(--white)" : "var(--black)"};
`;

export const PreviousPage = styled.button`
  border-radius: 1px;
  cursor: pointer;
  min-height: 40px;
  padding: 0 10px;
  disabled: true;
  visibility: ${({ currentPage }) => (currentPage <= 1 ? "hidden" : "visible")};
`;

export const NextPage = styled.button`
  cursor: pointer;
  min-height: 40px;
  border-radius: 1px;
  padding: 0 10px;
  visibility: ${({ currentPage, totalPages }) =>
    currentPage >= totalPages ? "hidden" : "visible"};
`;
