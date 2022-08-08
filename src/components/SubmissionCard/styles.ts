import { styled } from "../../styles";
import { StyledButtonRound } from "../Common/ButtonRound/styles";
import { StyledInput } from "../Common/Input/styles";

const DeleteButton = styled(StyledButtonRound, {
  svg: {
    transform: "rotate(45deg)",
    $$iconSize: "$space$2",
  },
});

const ViewButton = styled(StyledButtonRound, {
  svg: {
    $$iconSize: "$space$3",
  },
});

const EditButton = styled(StyledButtonRound, {
  svg: {
    $$iconSize: "$space$2_5",
  },
});

const StyledSubmissionCard = styled("div", {
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "$space$3",
  borderRadius: "$space$2",
  backgroundColor: "$colors$grayDark",
  minHeight: "7rem",
  overflow: "hidden",
  gap: "$space$2",

  [`& ${StyledButtonRound}`]: {
    color: "$black",
    transition: "opacity 0.2s, transform 0.3s",
    opacity: 0,
    transform: "translateY(25%)",
  },

  "&:hover": {
    [`& ${StyledButtonRound}`]: {
      opacity: 1,
      transform: "translateY(0)",
			transitionDelay: "var(--transition-delay)",
    },
  },

  "@bpMobile": {
    flexDirection: "column",
    alignItems: "flex-start",

    [`& ${StyledButtonRound}`]: {
      opacity: 1,
      transform: "initial",
    },
  },
});

const TextWrapper = styled("div", {
  display: "grid",
  gridAutoFlow: "column",
  alignItems: "center",
  gap: "$space$1",
  zIndex: 2,
  wordBreak: "break-word",

  variants: {
    isEdit: {
      true: {
        flexGrow: 1,
      },
    },
  },
});

const ButtonWrapper = styled("div", {
  display: "flex",
  gap: "$space$2",
  flexShrink: 0,
  zIndex: 2,
});

const Link = styled("a", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});

const Form = styled("form", {
  width: "100%",

  [`& ${StyledInput}`]: {
    width: "100%",
    color: "$white",
  },
});

export {
  StyledSubmissionCard,
  TextWrapper,
  ButtonWrapper,
  Link,
  DeleteButton,
  ViewButton,
  EditButton,
  Form,
};
