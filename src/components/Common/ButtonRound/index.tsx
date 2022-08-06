import { StyledButtonRound } from "./styles";

const ButtonRound = ({ children, ...others }) => (
  <StyledButtonRound {...others}>{children}</StyledButtonRound>
);

export { ButtonRound };
