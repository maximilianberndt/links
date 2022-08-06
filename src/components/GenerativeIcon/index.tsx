import { useMemo } from "react";
import { arrayPick } from "../../utils/arrayPick";
import { prng } from "../../utils/prng";
import { StyledGenerativeIcon } from "./styles";

interface GenerativeIconI {
  seed: string;
}

const colors = ["#5EFC8D", "#235789", "#FF579f", "#1CCAD8", "#561643"];

const generateColor = (seed: string) => arrayPick(colors, prng(seed));

const GenerativeIcon = ({ seed }: GenerativeIconI) => {
  generateColor(seed);

  const fills: string[] = useMemo(() => {
    {
      /* TODO: define order based on prng */
    }
    return [
      generateColor(seed),
      generateColor(seed.length.toString()),
      generateColor(seed.split("/").length.toString()),
    ];
  }, [seed]);

  const rotation = useMemo(() => prng(seed) * 360, [seed]);

  return (
    <StyledGenerativeIcon
      viewBox={`0 0 100 100`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <clipPath id="clipPath">
        <circle cx="50" cy="50" r="45" />
      </clipPath>

      <filter id="blur">
        <feGaussianBlur stdDeviation="30" />
      </filter>

      <g
        filter="url(#blur)"
        clipPath="url(#clipPath)"
        transform={`rotate(${rotation} 50 50)`}
      >
        {/* TODO: define positions based on prng */}
        <circle cx="40" cy="50" r="30" fill={fills[1]} />
        <circle cx="50" cy="60" r="30" fill={fills[2]} />
        <circle cx="60" cy="40" r="40" fill={fills[0]} />
      </g>
    </StyledGenerativeIcon>
  );
};

export { GenerativeIcon };
