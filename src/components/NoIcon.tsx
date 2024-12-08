import { SVGAttributes } from "react";

export function NoIcon(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      version="1.1"
      width="300"
      height="300"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      {...props}
    >
      <circle
        cx="150"
        cy="150"
        r="130"
        fill="transparent"
        stroke="currentColor"
        stroke-width="25"
      />

      <line
        x1="93.3"
        x2="206.7"
        y1="93.3"
        y2="206.7"
        stroke="currentColor"
        stroke-width="25"
        stroke-linecap="round"
      />
      <line
        x1="206.7"
        x2="93.3"
        y1="93.3"
        y2="206.7"
        stroke="currentColor"
        stroke-width="25"
        stroke-linecap="round"
      />
    </svg>
  );
}
