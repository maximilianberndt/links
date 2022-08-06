import { StyledText } from "./styles";

interface TextI {
  children: React.ReactNode;
	[others: string]: unknown;
}

const Text = ({ children, ...others }: TextI) => (
  <StyledText {...others}>{children}</StyledText>
);

export { Text };
