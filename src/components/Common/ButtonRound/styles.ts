import { styled } from "../../../styles";

const StyledButtonRound = styled("button", {
  display: "grid",
  placeItems: "center",
  borderRadius: "100%",
  background: "$colors$white",
  color: "$colors$black",

  svg: {
    width: "$$iconSize",
  },
  variants: {
    size: {
      s: {
        width: "$space$4",
        height: "$space$4",
      },
      m: {
        width: "$space$5",
        height: "$space$5",
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
      },
    },
  },

  defaultVariants: {
    size: "m",
  },
});

export { StyledButtonRound };
