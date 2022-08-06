import { ReactElement, useEffect, useMemo, useState } from "react";
import { Pagination } from "../Pagination";
import { StyledPaginatedList, List, ListItem } from "./styles";

interface PaginatedListI {
  items: ReactElement[];
  itemsPerPage?: number;
  startIndex?: number;
  onIndexChange?: (index: number) => void;
}

const PaginatedList = ({
  items = [],
  itemsPerPage = 5,
  startIndex = 0,
  onIndexChange,
}: PaginatedListI) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  // Figure out which items to display on the current page
  const currentItems: ReactElement[] = useMemo(() => {
    const startIndex = currentIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return items.filter(
      (item, index) => index >= startIndex && index < endIndex
    );
  }, [items, currentIndex, itemsPerPage]);

  useEffect(() => {
    if (onIndexChange) onIndexChange(currentIndex);
  }, [currentIndex]);

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
        currentIndex={currentIndex}
        setIndex={setCurrentIndex}
      />
    </StyledPaginatedList>
  );
};

export { PaginatedList };
