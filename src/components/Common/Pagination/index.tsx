import { ButtonRound } from "../ButtonRound";
import { StyledPagination } from "./styles";

interface PaginationI {
  maxItems: number;
  setIndex: (index: number) => void;
}

const Pagination = ({ maxItems, setIndex }: PaginationI) => {
  if (maxItems === 1) return null;

  return (
    <StyledPagination>
      {[...Array(maxItems)].map((el, index) => (
        <ButtonRound
          key={index}
          onClick={() => {
            setIndex(index);
          }}
        >
          {index + 1}
        </ButtonRound>
      ))}
    </StyledPagination>
  );
};

export { Pagination };
