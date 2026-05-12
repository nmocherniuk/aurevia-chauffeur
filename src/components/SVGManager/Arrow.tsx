import React, { FC } from "react";

export const Arrow: FC<
  React.SVGProps<SVGSVGElement> & {
    width?: number;
    height?: number;
    fill?: string;
  }
> = ({ width = 16, height = 16, fill = "#E9E7E2", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
