import { useEffect, useMemo } from "react";

import { ReactComponent as Chevron } from "../../../../public/icons/chevron.svg";

import {
  StyledPagination,
  PaginationButton,
  PrevButton,
  NextButton,
} from "./styles";

interface PaginationI {
  maxItems: number;
  currentIndex: number;
  setIndex: Function;
}

const Pagination = ({
  maxItems,
  currentIndex,
  setIndex,
}: PaginationI) => {
  const previous = () => {
    setIndex((index: number) => Math.max(index - 1, 0));
  };

  const next = () => {
    setIndex((index: number) => Math.min(index + 1, maxItems - 1));
  };

  // Calculate the current number of dots
  const paginationDots: number[] = useMemo(() => {
    const data = [];

		// Start one before the current index
    let start = Math.max(currentIndex - 1, 0);

		// end one after the current index
    let end = Math.min(start + 2, maxItems - 1);

    for (let i = start; i <= end; i++) {
      data.push(i);
    }

    return data;
  }, [currentIndex, maxItems]);

  useEffect(() => {
    // If the last item on the last page gets deleted we go back by one
    // to display the previous page
    if (currentIndex === maxItems) previous();
  }, [maxItems]);

  if (maxItems == 0) return null;

  return (
    <StyledPagination>
      <PrevButton size="s" onClick={previous}>
        <Chevron />
      </PrevButton>

      {paginationDots.map((index) => (
        <PaginationButton
          key={index}
          css={{
            backgroundColor: currentIndex === index ? "$white" : "$grayLight",
          }}
          onClick={() => {
            setIndex(index);
          }}
        >
          {index + 1}
        </PaginationButton>
      ))}

      <NextButton size="s" onClick={next}>
        <Chevron />
      </NextButton>
    </StyledPagination>
  );
};

export { Pagination };
