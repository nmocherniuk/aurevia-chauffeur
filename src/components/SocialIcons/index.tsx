import React, { FC } from "react";
import { socialIcons } from "./data";
import { cn } from "@/src/lib/utils";

interface SocialIconsProps {
  iconWidth?: number;
  iconHeight?: number;
  className?: string;
}

const SocialIcons: FC<SocialIconsProps> = ({
  iconWidth = 31,
  iconHeight = 31,
  className = "",
}) => {
  return (
    <ul className={cn("flex gap-x-4", className)}>
      {Object.entries(socialIcons).map(([name, { Icon, url }]) => (
        <li key={name}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center justify-center rounded-full bg-background p-2"
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
