import React, { FC } from "react";
import { socialIcons } from "./data";
import { cn } from "@/src/lib/utils";

interface SocialIconsProps {
  classNameContainer?: string;
  classNameIcon?: string;
}

const SocialIcons: FC<SocialIconsProps> = ({
  classNameContainer = "",
  classNameIcon = "",
}) => {
  return (
    <ul className={cn("flex gap-x-4", classNameContainer)}>
      {Object.entries(socialIcons).map(
        ([name, { Icon, url, width, height }]) => (
          <li key={name}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex h-[47px] w-[47px] cursor-pointer items-center justify-center rounded-full bg-background/75 p-2 transition-colors duration-200 hover:bg-background",
                classNameIcon,
              )}
            >
              <Icon
                className="fill-gray-400 hover:fill-gray-300 active:fill-yellow-100"
                width={width}
                height={height}
              />
            </a>
          </li>
        ),
      )}
    </ul>
  );
};

export default SocialIcons;
