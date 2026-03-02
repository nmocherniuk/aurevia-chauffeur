import React, { FC } from "react";
import FleetCard from "@/src/components/Layouts/FleetCard";
import { fleets } from "@/src/features/FleetSection/data";

const FLEET_ORDER: ("comfort" | "business" | "van")[] = [
  "comfort",
  "business",
  "van",
];
const CLASS_LABELS: Record<string, string> = {
  comfort: "Comfort",
  business: "Business",
  van: "Van",
};

const FleetSection: FC = () => {
  return (
    <section id="flotte" className="mb-28 w-full">
      <h2 className="font-benzin text-white text-center text-2xl mb-10 sm:text-start sm:text-[28px] md:text-3xl lg:text-4xl lg:mb-11">
        Comfortable transportation, professional drivers
      </h2>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {FLEET_ORDER.map((key) => (
          <FleetCard
            key={key}
            cars={fleets[key]}
            classLabel={CLASS_LABELS[key]}
          />
        ))}
      </div>
    </section>
  );
};

export default FleetSection;
