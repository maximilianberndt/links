import { styled } from "../../../styles";
import { StyledPagination } from "../Pagination/styles";

export const StyledPaginatedList = styled("section", {
  [`& ${StyledPagination}`]: {
    marginTop: "$space$3",
  },
});

export const List = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "$space$3",
});

export const ListItem = styled("li");
