import { StyledSvg } from "./styles";

const Svg = ({ icon, width = 1, height = 1 }) => {
  if (!icon) return null;

  return (
    <StyledSvg
      css={{
        width: `${width}rem`,
        height: `${height}rem`,
      }}
      viewBox="0 0 32 32"
    >
      <use href={`#${icon}`} />
    </StyledSvg>
  );
};

export { Svg };
