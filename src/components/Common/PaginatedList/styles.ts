import { styled } from "../../../styles";
import { StyledPagination } from "../Pagination/styles";

const StyledPaginatedList = styled("section", {
  [`& ${StyledPagination}`]: {
    marginTop: "$space$3",
  },
});

const List = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "$space$3",
});

const ListItem = styled("li");

export { StyledPaginatedList, List, ListItem };
