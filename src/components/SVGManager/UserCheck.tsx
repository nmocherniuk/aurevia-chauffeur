import React, { FC } from "react";

export const UserCheck: FC<
  React.SVGProps<SVGSVGElement> & {
    width?: number;
    height?: number;
    fill?: string;
  }
> = ({ width = 24, height = 24, fill = "#E9E7E2", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 8C15 6.67392 14.4732 5.40215 13.5355 4.46447C12.5979 3.52678 11.3261 3 10 3C8.67392 3 7.40215 3.52678 6.46447 4.46447C5.52678 5.40215 5 6.67392 5 8C5 9.32608 5.52678 10.5979 6.46447 11.5355C7.40215 12.4732 8.67392 13 10 13C11.3261 13 12.5979 12.4732 13.5355 11.5355C14.4732 10.5979 15 9.32608 15 8Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 20C3 18.6095 3.41415 17.2504 4.18964 16.0962C4.96514 14.942 6.06684 14.0448 7.35424 13.5193C8.64164 12.9937 10.0564 12.8634 11.4181 13.1452C12.7799 13.4269 14.0268 14.1078 15 15.101M13 18.5C13 18.5 14.348 19.007 15 21C15 21 18.177 16 21 15"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
