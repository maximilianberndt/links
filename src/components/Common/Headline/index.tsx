import { StyledHeadline } from "./styles";

const Headline = ({ children, ...others }) => (
  <StyledHeadline {...others}>{children}</StyledHeadline>
);

export { Headline };
