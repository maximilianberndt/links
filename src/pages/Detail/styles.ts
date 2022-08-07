import { StyledHeadline } from "../../components/Common/Headline/styles";
import { StyledText } from "../../components/Common/Text/styles";
import { styled } from "../../styles";

const StyledDetail = styled("article", {
  marginTop: "$space$5",
  padding: "0 $space$3",

  "@bpMobile": {
    padding: 0,
  },
});

const Subheadline = styled(StyledText, {
  color: "$grayLight",
  marginBottom: "$space$1",
});

const StyledLink = styled(StyledHeadline, {
  wordBreak: "break-word",
});

const Back = styled(StyledText, {
  display: "inline-block",
  color: "$grayLight",
  marginBottom: "$space$5",
});

const TextWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$space$2",
});

export { StyledDetail, Subheadline, Back, StyledLink, TextWrapper };
