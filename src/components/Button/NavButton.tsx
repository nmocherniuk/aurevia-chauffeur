"use client";

import React, { FC } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  cn,
  DRIVER_HEADER_NAV_SCROLL_OFFSET,
  scrollToSection,
} from "@/src/lib/utils";
import { Arrow } from "../SVGManager/Arrow";
import { BUTTON_VARIANTS, ButtonVariant } from "./variants";

type NavButtonProps = LinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: React.ReactNode;
  variant: ButtonVariant;
  className?: string;
  withArrow?: boolean;
};

export const NavButton: FC<NavButtonProps> = ({
  children,
  variant,
  className,
  withArrow = true,
  onClick,
  href,
  ...props
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (typeof href !== "string" || !href.includes("#")) return;

    const [rawBase, rawHash] = href.split("#");
    const sectionId = rawHash?.trim();
    if (!sectionId) return;

    const base = rawBase || pathname || "/";
    const normalizedCurrent = (pathname || "/").replace(/\/$/, "") || "/";
    const normalizedTarget = base.replace(/\/$/, "") || "/";

    e.preventDefault();

    if (normalizedCurrent === normalizedTarget) {
      scrollToSection(sectionId, DRIVER_HEADER_NAV_SCROLL_OFFSET);
      return;
    }

    router.push(base, { scroll: false });
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToSection(sectionId, DRIVER_HEADER_NAV_SCROLL_OFFSET);
      });
    });
  };

  return (
    <Link
      href={href}
      className={cn(BUTTON_VARIANTS[variant], className)}
      onClick={handleClick}
      {...props}
    >
      {children}
      {variant === "primary" && withArrow ? (
        <Arrow className="h-4 w-4" fill="white" />
      ) : null}
    </Link>
  );
};
