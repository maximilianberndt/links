import { useMemo } from "react";

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
  maxPaginationDots?: number;
}

const Pagination = ({
  maxItems,
  currentIndex,
  setIndex,
  maxPaginationDots = 3,
}: PaginationI) => {
  const previous = () => {
    setIndex((index: number) => Math.max(index - 1, 0));
  };

  const next = () => {
    setIndex((index: number) => Math.min(index + 1, maxItems - 1));
  };

  // Calculate the current
  const paginationDots: number[] = useMemo(() => {
    const data = [];

    let start = Math.max(currentIndex - 1, 0);
    let end = Math.min(start + maxPaginationDots - 1, maxItems - 1);

    for (let i = start; i <= end; i++) {
      data.push(i);
    }

    return data;
  }, [currentIndex]);

  if (maxItems === 1) return null;

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
