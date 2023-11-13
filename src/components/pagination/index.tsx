import { ITEMS_PER_PAGE } from "@/utils/constants";
import * as S from "./style";

interface PaginationProps {
  page: number;
  rows: number;
  onPageChange: (value: number) => void;
}

const Pagination = ({ page, rows, onPageChange }: PaginationProps) => {
  const totalPages = Math.ceil(rows / ITEMS_PER_PAGE);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <S.PaginationContainer>
      <S.PageList>
        {pageNumbers?.map((pageNumber) => (
          <S.PageItem key={pageNumber}>
            <S.PageButton
              className={pageNumber === page ? "active" : ""}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </S.PageButton>
          </S.PageItem>
        ))}
      </S.PageList>
    </S.PaginationContainer>
  );
};

export default Pagination;
