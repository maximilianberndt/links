import { StyledHeadline } from "./styles";

interface HeadlineI  {
	children: React.ReactNode,
	[others: string]: unknown;
}

const Headline = ({ children, ...others }: HeadlineI) => (
  <StyledHeadline {...others}>{children}</StyledHeadline>
);

export { Headline };
