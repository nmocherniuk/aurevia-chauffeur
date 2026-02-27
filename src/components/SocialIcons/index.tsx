import React, { FC } from "react";
import { socialIcons } from "./data";
import { cn } from "@/src/lib/utils";

interface SocialIconsProps {
  iconWidth?: number;
  iconHeight?: number;
  classNameContainer?: string;
  classNameIcon?: string;
}

const SocialIcons: FC<SocialIconsProps> = ({
  iconWidth = 31,
  iconHeight = 31,
  classNameContainer = "",
  classNameIcon = "",
}) => {
  return (
    <ul className={cn("flex gap-x-4", classNameContainer)}>
      {Object.entries(socialIcons).map(([name, { Icon, url }]) => (
        <li key={name}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("inline-flex cursor-pointer items-center justify-center rounded-full bg-background p-2", classNameIcon)}
          >
            <Icon
              className="fill-gray-400 hover:fill-gray-300 active:fill-yellow-100"
              width={iconWidth}
              height={iconHeight}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
