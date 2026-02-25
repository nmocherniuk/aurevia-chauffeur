import React, { FC } from "react";

export const ShieldCheck: FC<
  React.SVGProps<SVGSVGElement> & {
    width?: number;
    height?: number;
    fill?: string;
  }
> = ({ width = 36, height = 36, fill = "#E9E7E2", ...props }) => {
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
        d="M22.5 13.5L16.5 19.5L13.5 16.5M30 15.2475C30 25.0995 22.548 29.517 19.389 30.9465L19.3845 30.9495C19.053 31.0995 18.8865 31.1745 18.5085 31.239C18.2685 31.281 17.7315 31.281 17.493 31.239C17.1856 31.1879 16.888 31.0892 16.611 30.9465C13.452 29.517 6 25.0995 6 15.2475V9.3C6 7.62 6 6.78 6.327 6.138C6.615 5.5725 7.0725 5.115 7.638 4.827C8.28 4.5 9.12 4.5 10.8 4.5H25.2C26.88 4.5 27.72 4.5 28.3605 4.827C28.926 5.115 29.385 5.5725 29.673 6.138C30 6.7785 30 7.6185 30 9.2955V15.2475Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
