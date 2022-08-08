import { useMemo } from "react";

import { StyledSubmissionIcon } from "./styles";

import { arrayPick } from "../../utils/arrayPick";
import { prng } from "../../utils/prng";
import { generateId } from "../../utils/generateId";

interface SubmissionIconI {
  url: string;
}

const colors = ["#FF8811", "#235789", "#FF579f", "#1CCAD8", "#561643"];

const generateColor = (seed: string) => arrayPick(colors, prng(seed));

/**
 * Generate a custom icon based on an input url
 */
const SubmissionIcon = ({ url = "" }: SubmissionIconI) => {
  const id = useMemo(generateId, []);

  const { fills, rotation, offset } = useMemo(() => {
    const randomNumber = prng(url);

    // Rotate the whole shape
    const rotation = randomNumber * 360;

    // Offset each circle position from it's center
    const x = (0.5 - randomNumber) * 80;
    const y = randomNumber > 0.5 ? x * 0.8 : -x;

    const fills = [
      generateColor(url),
      generateColor(url.length.toString()),
      generateColor(url.split("/").length.toString()),
      generateColor(url.split(".").toString()),
    ];

    return {
      rotation,
      offset: { x, y },
      fills,
    };
  }, [url]);

  return (
    <StyledSubmissionIcon
      viewBox={`0 0 100 100`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <clipPath id={`clip-${id}`}>
        <circle cx="50" cy="50" r="45" />
      </clipPath>

      <filter id={`filter-${id}`}>
        <feGaussianBlur stdDeviation="25" />
      </filter>

      <g
        clipPath={`url(#clip-${id})`}
        filter={`url(#filter-${id})`}
        transform={`rotate(${rotation} 50 50)`}
      >
        <rect width="100%" height="100%" fill="#b9b9ba" />

        <circle cx={10 + offset.x} cy={50 + offset.y} r="30" fill={fills[0]} />
        <circle cx={90 + offset.x} cy={50 + offset.y} r="30" fill={fills[1]} />
        <circle cx={50 + offset.x} cy={90 + offset.y} r="30" fill={fills[2]} />
        <circle cx={50 + offset.x} cy={10 + offset.y} r="30" fill={fills[3]} />
      </g>
    </StyledSubmissionIcon>
  );
};

export { SubmissionIcon };
