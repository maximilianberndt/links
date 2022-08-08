import { styled } from "../../../styles";

const StyledInput = styled("input", {
  background: "transparent",
  color: "$grayLight",
  fontSize: "$fontSizes$1",
  flexGrow: 1,

  "&::placeholder": {
    color: "$grayLight",
    fontSize: "$fontSizes$1",
  },
});

export { StyledInput };
