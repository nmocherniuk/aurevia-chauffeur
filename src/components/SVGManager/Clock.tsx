import React, { FC } from "react";

export const Clock: FC<
  React.SVGProps<SVGSVGElement> & {
    width?: number;
    height?: number;
    fill?: string;
    strokeWidth?: string;
  }
> = ({
  width = 36,
  height = 36,
  fill = "#E9E7E2",
  strokeWidth = "1.8",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 9V18H27"
        stroke={fill}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 33C26.2845 33 33 26.2845 33 18C33 9.7155 26.2845 3 18 3C9.7155 3 3 9.7155 3 18C3 26.2845 9.7155 33 18 33Z"
        stroke={fill}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
