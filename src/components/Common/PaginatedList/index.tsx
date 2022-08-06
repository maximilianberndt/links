import { ReactElement } from "react";
import { StyledPaginatedList, List, ListItem } from "./styles";

interface PaginatedListI {
  items: ReactElement[];
  itemsPerPage: number;
}

const PaginatedList = ({ items = [], itemsPerPage = 5 }: PaginatedListI) => {
  if (!items.length) return null;

  return (
    <StyledPaginatedList>
      <List>
        {items.map((item, i) => (
          <ListItem key={i}>{item}</ListItem>
        ))}
      </List>
    </StyledPaginatedList>
  );
};

export { PaginatedList };
