import { StyledButtonRound } from "./styles";

interface ButtonRoundI {
  size?: "s" | "m";
  children: React.ReactNode;
  [others: string]: unknown;
}

const ButtonRound = ({ children, ...others }: ButtonRoundI) => (
  <StyledButtonRound {...others}>{children}</StyledButtonRound>
);

export { ButtonRound };
