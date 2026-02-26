import React, { FC } from "react";

interface MainContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ children, ...props }) => {
  return (
    <div
      className="mx-auto max-w-[1360px] px-5 sm:px-7 md:px-10 lg:px-20"
      {...props}
    >
      {children}
    </div>
  );
};

export default MainContainer;
