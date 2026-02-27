import React, { FC } from "react";
import ServiceCard from "@/src/components/Layouts/ServiceCard";
import { services } from "@/src/features/ServicesSection/data";

const ServicesSection: FC = () => {
  return (
    <section id="services" className="mb-28 w-full">
      <h2 className="font-benzin text-white text-center text-2xl mb-10 sm:text-start sm:text-[28px] md:text-3xl lg:text-4xl lg:mb-11">
        Nos services
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            className={
              index === services.length - 1
                ? "md:col-span-2 lg:col-span-2"
                : index < 2
                  ? "lg:col-span-3"
                  : "lg:col-span-2"
            }
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
