import React, { FC } from "react";

export const OutlineCheck: FC<
    React.SVGProps<SVGSVGElement> & {
        width?: number;
        height?: number;
        fill?: string;
    }
> = ({ width = 73, height = 73, fill = "#BB9B78", ...props }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M23.7705 37.9375L30.8538 45.0208L48.5622 27.3125" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.4583 5.4888C23.8397 2.3747 29.9492 0.739795 36.1667 0.750048C55.7273 0.750048 71.5833 16.6061 71.5833 36.1667C71.5833 55.7273 55.7273 71.5834 36.1667 71.5834C16.606 71.5834 0.75 55.7273 0.75 36.1667C0.75 29.7173 2.47479 23.6646 5.48875 18.4584" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
};
