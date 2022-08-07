import { ButtonRound } from "../ButtonRound";
import { StyledPagination } from "./styles";
import { css } from "../../../styles";

interface PaginationI {
  maxItems: number;
  currentIndex: number;
  setIndex: (index: number) => void;
  maxVisisble: 3;
}

const Pagination = ({ maxItems, currentIndex, setIndex }: PaginationI) => {
	// const []


  if (maxItems === 1) return null;

  return (
    <StyledPagination>
      <ButtonRound size="s">{"<"}</ButtonRound>

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

      <ButtonRound size="s">{">"}</ButtonRound>
    </StyledPagination>
  );
};

export { Pagination };
