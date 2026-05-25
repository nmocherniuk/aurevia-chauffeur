"use client";

import React, { FC } from "react";
import ServiceCard from "@/src/components/Layouts/ServiceCard";
import ServiceSecurity from "@/src/components/Layouts/ServiceSecurity";
import { useContent } from "@/src/providers/LocaleProvider";

type Props = {
  type: "chauffeur" | "security";
};

const ServicesSection: FC<Props> = ({ type }) => {
  const { chauffeur: chauffeurContent, security: securityContent, common } =
    useContent();

  return (
    <section id="prestations" className="w-full">
      <h2 className="mb-10 font-benzin text-center text-2xl text-white sm:mb-11 sm:text-start sm:text-[28px] md:text-3xl lg:mb-11 lg:text-4xl">
        {type === "chauffeur"
          ? chauffeurContent.services.title
          : common.servicesSectionTitle}
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
        {type === "chauffeur"
          ? chauffeurContent.services.items.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                className={
                  index === chauffeurContent.services.items.length - 1
                    ? "md:col-span-2 lg:col-span-2"
                    : index < 2
                      ? "lg:col-span-3"
                      : "lg:col-span-2"
                }
              />
            ))
          : securityContent.securityServices.map((service, index) => {
              const isWide = index === securityContent.securityServices.length - 1;

              return (
                <ServiceSecurity
                  key={service.id}
                  service={service}
                  wide={isWide}
                  className={isWide ? "md:col-span-2 lg:col-span-4" : "lg:col-span-2"}
                />
              );
            })}
      </div>
    </section>
  );
};

export default ServicesSection;
