import { ButtonRound } from "../ButtonRound";
import { StyledPagination } from "./styles";
import { css } from "../../../styles";

interface PaginationI {
  maxItems: number;
  currentIndex: number;
  setIndex: (index: number) => void;
}

const Pagination = ({ maxItems, currentIndex, setIndex }: PaginationI) => {
  if (maxItems === 1) return null;

  return (
    <StyledPagination>
      {[...Array(maxItems)].map((el, index) => (
        <ButtonRound
          key={index}
          css={{
            backgroundColor: currentIndex === index ? "$white" : "$grayLight",
          }}
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
