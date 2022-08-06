import { styled } from "../../styles";
import { StyledButtonRound } from "../Common/ButtonRound/styles";

const StyledSubmissionInput = styled("form", {
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "$space$3",
});

const ButtonWrapper = styled("div", {
	marginLeft: "$space$2",
	flexShrink: 0,
});

const AddButton = styled(StyledButtonRound, {
	fontWeight: "bold",
})

const Input = styled("input", {
  padding: "$space$1",
  backgroundColor: "$black",
  color: "$grayLight",
  fontSize: "$fontSizes$1",
	flexGrow: 1,

  "&::placeholder": {
    color: "$grayLight",
    fontSize: "$fontSizes$1",
  },
});

export { StyledSubmissionInput, ButtonWrapper, AddButton, Input };
