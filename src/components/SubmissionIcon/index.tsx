import { useMemo } from "react";
import { arrayPick } from "../../utils/arrayPick";
import { prng } from "../../utils/prng";
import { StyledSubmissionIcon } from "./styles";

interface SubmissionIconI {
  url: string;
}

const colors = ["#5EFC8D", "#235789", "#FF579f", "#1CCAD8", "#561643"];

const generateColor = (seed: string) => arrayPick(colors, prng(seed));

/**
 * Generate a custom icon based on an input url
 */
const SubmissionIcon = ({ url = "" }: SubmissionIconI) => {
  // Fill color
  const fills: string[] = useMemo(() => {
    return [
      generateColor(url),
      generateColor(url.length.toString()),
      generateColor(url.split("/").length.toString()),
    ];
  }, [url]);

  // Rotate the whole shape
  const rotation = useMemo(() => prng(url) * 360, [url]);

  // Offset each circle position from it's center
  const offset = useMemo(() => {
    const randomNumber = prng(url);

    const x = (0.5 - prng(url)) * 80;
    const y = randomNumber > 0.5 ? x * 0.8 : -x;

    return { x, y };
  }, [url]);

  return (
    <StyledSubmissionIcon
      viewBox={`0 0 100 100`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <clipPath id="clipPath">
        <circle cx="50" cy="50" r="45" />
      </clipPath>

      <filter id="blur">
        <feGaussianBlur stdDeviation="25" />
      </filter>

      <g
        filter="url(#blur)"
        clipPath="url(#clipPath)"
        transform={`rotate(${rotation} 50 50)`}
      >
        <rect width="100%" height="100%" fill="#b9b9ba" />

        <circle cx={10 + offset.x} cy={50 + offset.y} r="30" fill={fills[0]} />
        <circle cx={90 + offset.x} cy={50 + offset.y} r="30" fill={fills[1]} />
        <circle cx={50 + offset.x} cy={90 + offset.y} r="30" fill={fills[2]} />
        <circle
          cx={50 + offset.x}
          cy={10 + offset.y}
          r="30"
          fill={arrayPick(fills, prng(url))}
        />
      </g>
    </StyledSubmissionIcon>
  );
};

export { SubmissionIcon };
