import React, { FC } from "react";
import CardOutline from "@/src/components/Layouts/CardOutline";
import { whyChooseUsText } from "./data";

const WhyChooseUsSection: FC = () => {
  return (
    <section id="why-choose-us" className="mb-28 w-full">
      <h2 className="font-benzin text-white text-center text-2xl mb-10 sm:text-start sm:text-[28px] md:text-3xl lg:text-4xl lg:mb-11">
        Pourquoi une clientèle exigeante nous fait confiance
      </h2>
      <div className="flex flex-col gap-5 md:grid lg:grid-cols-2 ">
        {Object.entries(whyChooseUsText).map(([key, value]) => {
          const Icon = value.icon;
          return (
            <CardOutline
              key={key}
              className="flex flex-col items-center justify-center px-5 py-6 gap-4 sm:flex-row sm:gap-6 sm:py-5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center sm:h-10 sm:w-10">
                <Icon className="h-full w-full" />
              </div>
              <div className="flex flex-col items-center justify-center gap-3 sm:items-start sm:gap-2">
                <h3 className="text-white text-xl font-onest text-center sm:text-left">
                  {value.title}
                </h3>
                <p className="text-base text-text-primary text-center sm:text-left font-light">
                  {value.description}
                </p>
              </div>
            </CardOutline>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
