import { styled } from "../../../styles";
import { StyledButtonRound } from "../ButtonRound/styles";

const StyledPagination = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$space$2",
});

const PaginationButton = styled(StyledButtonRound, {});

const PrevButton = styled(StyledButtonRound, {
  svg: {
    $$iconSize: "$space$2",
    transform: "rotate(-90deg)",
  },
});

const NextButton = styled(StyledButtonRound, {
  svg: {
    $$iconSize: "$space$2",
    transform: "rotate(90deg)",
  },
});

export { StyledPagination, PaginationButton, PrevButton, NextButton };
