import { styled } from "../../styles";

const StyledGenerativeIcon = styled("svg", {
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
  },

  defaultVariants: {
    size: "m",
  },
});

export { StyledGenerativeIcon };
