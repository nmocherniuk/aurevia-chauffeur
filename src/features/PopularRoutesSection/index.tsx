"use client";

import { Button } from "@/src/components/Button";
import RouteCard from "@/src/components/Layouts/RouteCard";
import { FC, useState } from "react";
import { type RouteTabId } from "./data";
import { chauffeurContent } from "@/src/content/chauffeur";

const PopularRoutesSection: FC = () => {
  const [activeTab, setActiveTab] = useState<RouteTabId>("cityToCity");

  return (
    <section id="popular-routes" className="w-full">
      <h2 className="font-benzin text-white text-center text-2xl mb-10 sm:text-start sm:text-[28px] md:text-3xl lg:text-4xl lg:mb-11">
        Les itinéraires les plus populaires
      </h2>
      <nav
        className="flex flex-col justify-center gap-3 mb-9 md:flex-row "
        aria-label="Catégories d'itinéraires"
      >
        {chauffeurContent.transferTabs.map(({ id, label }) => (
          <Button
            className="rounded-lg"
            key={id}
            variant={activeTab === id ? "tabActive" : "tab"}
            onClick={() => setActiveTab(id)}
          >
            {label}
          </Button>
        ))}
      </nav>
      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 xl:min-h-[242px] lg:content-start">
        {chauffeurContent.popularRoutes[activeTab].map((route, index) => (
          <RouteCard key={route.id} route={route} index={index} />
        ))}
      </div>
    </section>
  );
};

export default PopularRoutesSection;
