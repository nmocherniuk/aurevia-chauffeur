"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import MainContainer from "../MainContainer";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { getNavLinksForPath } from "@/src/data/routes";
import { cn } from "@/src/lib/utils";
import { DesktopNav } from "./components/DesktopNav";
import { HeaderActions } from "./components/HeaderActions";
import { MobileMenu } from "./components/MobileMenu";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { useLocale } from "@/src/providers/LocaleProvider";
import { getRoutes } from "@/src/config/routes";
import { stripLocaleFromPathname } from "@/src/i18n/paths";
import { useActiveSectionId } from "../../hooks/useActiveSectionId";

const MAIN_SECTION_ID = "accueil";

const SCROLL_BLUR_RANGE: [number, number] = [0, 120];
const SCROLL_BLUR_PX: [number, number] = [0, 20];
const SCROLL_BG_ALPHA: [number, number] = [0, 0.08];

const Header: React.FC = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const routes = getRoutes(locale);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navLinks = getNavLinksForPath(pathname, locale);
  const [activeSectionId, setActiveSectionId] = useActiveSectionId(navLinks);

  const { scrollY } = useScroll();
  const blurTarget = useTransform(scrollY, SCROLL_BLUR_RANGE, SCROLL_BLUR_PX);
  const bgAlphaTarget = useTransform(
    scrollY,
    SCROLL_BLUR_RANGE,
    SCROLL_BG_ALPHA,
  );
  const blurPx = useSpring(blurTarget, { stiffness: 280, damping: 32, mass: 0.4 });
  const bgAlpha = useSpring(bgAlphaTarget, {
    stiffness: 280,
    damping: 32,
    mass: 0.4,
  });
  const backdropFilter = useMotionTemplate`blur(${blurPx}px)`;
  const headerBackground = useMotionTemplate`rgba(191, 191, 191, ${bgAlpha})`;

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (stripLocaleFromPathname(pathname) === "/") {
      e.preventDefault();
      document
        .getElementById(MAIN_SECTION_ID)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const transitionDuration = "duration-300";

  return (
    <>
      <motion.header
        className="flex h-[77px] fixed top-0 left-0 right-0 z-50"
        style={{
          backdropFilter: backdropFilter,
          WebkitBackdropFilter: backdropFilter,
          backgroundColor: headerBackground,
        }}
      >
        <div
          className={cn(
            "absolute inset-0 bg-background transition-opacity",
            transitionDuration,
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
          aria-hidden={!isOpen}
        />
        <MainContainer className="relative z-10 flex h-full min-h-0 flex-1 items-center justify-between gap-6">
          <Link
            href={routes.home.index}
            className="relative h-full aspect-square shrink-0"
            onClick={handleLogoClick}
          >
            <Image
              src={logo}
              alt="Riviera Prime Chauffeur"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
          <DesktopNav
            links={navLinks}
            activeSectionId={activeSectionId}
            onSectionChange={setActiveSectionId}
          />
          <div className="flex shrink-0 items-center gap-4 lg:pt-0.5">
            <LanguageSwitcher className="relative z-10 hidden lg:flex lg:items-center" />
            <HeaderActions isOpen={isOpen} onToggle={setIsOpen} />
          </div>
        </MainContainer>
      </motion.header>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        links={navLinks}
        activeSectionId={activeSectionId}
        onSectionChange={setActiveSectionId}
        transitionDuration={transitionDuration}
      />
    </>
  );
};

export default Header;
