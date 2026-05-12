import React from "react";
import Link from "next/link";
import SocialIcons from "../SocialIcons";
import MainContainer from "../MainContainer";
import { ROUTES, FOOTER_ROUTE_IDS } from "@/src/data/routes";

const Footer: React.FC = () => {
  const footerRoutes = ROUTES.filter((r) => FOOTER_ROUTE_IDS.includes(r.id));

  return (
    <footer className="mt-28">
      <MainContainer>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-7 sm:justify-between">
          <div className="flex flex-col gap-4 text-center items-center sm:items-start sm:gap-3">
            <h4 className="text-text-secondary text-xl sm:text-left">
              Aurevia
            </h4>
            <p className="text-text-primary text-base font-light sm:text-left">
              Services premium de transport privé et de sécurité, pensés pour la
              discrétion, la fiabilité et l’exigence.
            </p>
          </div>
          {/* <SocialIcons classNameIcon='border border-primary rounded-full' /> */}
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
            &copy; 2026 Aurevia. Tous droits réservés
          </p>
        </div>
      </MainContainer>
    </footer>
  );
};

export default Footer;
