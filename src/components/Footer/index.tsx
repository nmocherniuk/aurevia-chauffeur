"use client";

import React from "react";
import Link from "next/link";
import MainContainer from "../MainContainer";
import { FOOTER_ROUTE_IDS, getFooterRoutes } from "@/src/data/routes";
import { useContent, useLocale } from "@/src/providers/LocaleProvider";

const Footer: React.FC = () => {
  const locale = useLocale();
  const { common } = useContent();
  const footerRoutes = getFooterRoutes(locale).filter((route) =>
    FOOTER_ROUTE_IDS.includes(route.id),
  );

  return (
    <footer className="mt-28">
      <MainContainer>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-7 sm:justify-between">
          <div className="flex flex-col gap-4 text-center items-center sm:items-start sm:gap-3">
            <h4 className="text-text-secondary text-xl sm:text-left">
              {common.brand}
            </h4>
            <p className="text-text-primary text-base font-light sm:text-left">
              {common.footer.tagline}
            </p>
          </div>
        </div>

        <div className="w-full min-w-0 py-6">
          <hr className="border-0 border-t border-[#5A5A5A] " />
        </div>
        <div className="flex flex-col items-center gap-5 lg:flex-row-reverse lg:pb-6 lg:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1 sm:gap-x-9 lg:gap-x-6">
              {footerRoutes.map((route) => (
                <li key={route.id}>
                  <Link
                    href={route.href}
                    className="text-text-primary text-sm font-light"
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-text-primary text-sm text-center pb-6 pt-3 lg:p-0">
            {common.footer.copyright}
          </p>
        </div>
      </MainContainer>
    </footer>
  );
};

export default Footer;
