import { StyledText } from "./styles";

const Text = ({ children, ...others }) => (
  <StyledText {...others}>{children}</StyledText>
);

export { Text };
