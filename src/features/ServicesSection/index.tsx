import React, { FC } from "react";
import ServiceCard from "@/src/components/Layouts/ServiceCard";
import { chauffeurServices, securityServices } from "@/src/features/ServicesSection/data";
import ServiceSecurity from "@/src/components/Layouts/ServiceSecurity";

type Props = {
  type: "chauffeur" | "security";
};

const ServicesSection: FC<Props> = ({ type }) => {
  return (
    <section id="prestations" className="w-full">
      <h2 className="mb-10 font-benzin text-center text-2xl text-white sm:mb-11 sm:text-start sm:text-[28px] md:text-3xl lg:mb-11 lg:text-4xl">
        Nos services
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
        {type === "chauffeur"
          ? chauffeurServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                className={
                  index === chauffeurServices.length - 1
                    ? "md:col-span-2 lg:col-span-2"
                    : index < 2
                      ? "lg:col-span-3"
                      : "lg:col-span-2"
                }
              />
            ))
          : securityServices.map((service, index) => {
              const isWide = index === securityServices.length - 1;

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