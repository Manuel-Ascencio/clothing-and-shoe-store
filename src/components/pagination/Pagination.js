import {
  PaginationContainer,
  PreviousPage,
  NextPage,
  Pages,
  Page,
  Button,
} from "./PaginationStyles";

const Pagination = ({
  productsPerPage,
  currentPage,
  setCurrentPage,
  totalProducts,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
    window.scroll({ top: 0, behavior: "smooth", duration: 2000 });
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
    window.scroll({ top: 0, behavior: "smooth", duration: 2000 });
  };

  const onSelectedPage = (page) => {
    setCurrentPage(page);
    window.scroll({ top: 0, behavior: "smooth", duration: 2000 });
  };

  return (
    <PaginationContainer>
      <PreviousPage onClick={onPreviousPage} currentPage={currentPage}>
        Previous
      </PreviousPage>
      <Pages totalPages={totalPages}>
        {pageNumbers.map((page) => (
          <Page key={page}>
            <Button
              currentPage={currentPage}
              page={page}
              onClick={() => onSelectedPage(page)}
            >
              {page}
            </Button>
          </Page>
        ))}
      </Pages>
      <NextPage
        onClick={onNextPage}
        currentPage={currentPage}
        totalPages={totalPages}
      >
        NextPage
      </NextPage>
    </PaginationContainer>
  );
};

export default Pagination;
