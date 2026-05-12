import React, { FC } from "react";
import { cn } from "@/src/lib/utils";

interface MainContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const MainContainer: FC<MainContainerProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn("mx-auto max-w-[1360px] px-5 sm:px-7 md:px-10 lg:px-20 w-full", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default MainContainer;
