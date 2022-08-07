import { styled } from "../../../styles";
import { StyledButtonRound } from "../ButtonRound/styles";

const StyledPagination = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$space$2",
});

const PaginationButton = styled(StyledButtonRound, {
	fontWeight: "bold"
})

export { StyledPagination, PaginationButton };
