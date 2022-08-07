import { styled } from "../../../styles";

export const StyledButtonRound = styled("button", {
  display: "grid",
  placeItems: "center",
  borderRadius: "100%",
  background: "$colors$white",

	svg: {
		width: "$$iconSize"
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
  },

  defaultVariants: {
    size: "m",
  },
});
