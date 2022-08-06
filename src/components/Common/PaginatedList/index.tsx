import { ReactElement, useEffect, useMemo, useState } from "react";
import { Pagination } from "../Pagination";
import { StyledPaginatedList, List, ListItem } from "./styles";

interface PaginatedListI {
  items: ReactElement[];
  itemsPerPage?: number;
}

const PaginatedList = ({ items = [], itemsPerPage = 5 }: PaginatedListI) => {
  const [currentIndex, setCurrentIndex] = useState(0);

	// Figure out which items to display on the current page
  const currentItems: ReactElement[] = useMemo(() => {
    const startIndex = currentIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return items.filter(
      (item, index) => index >= startIndex && index < endIndex
    );
  }, [items, currentIndex, itemsPerPage]);

  if (!currentItems?.length) return null;

  return (
    <StyledPaginatedList>
      <List>
        {currentItems.map((item, i) => (
          <ListItem key={i}>{item}</ListItem>
        ))}
      </List>

      <Pagination
        maxItems={Math.ceil(items.length / itemsPerPage)}
        setIndex={setCurrentIndex}
      />
    </StyledPaginatedList>
  );
};

export { PaginatedList };
