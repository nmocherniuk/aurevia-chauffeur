import React, { FC } from "react";
import Image from "next/image";
import { Service } from "./data";
import { cn } from "@/src/lib/utils";

interface ServiceProps {
  service: Service;
  className?: string;
}

const ServiceCard: FC<ServiceProps> = ({ service, className }) => {
  return (
    <article
      className={cn(
        "relative flex h-[258px] flex-col justify-end overflow-hidden rounded-lg",
        className,
      )}
    >
      <Image
        src={service.image}
        alt={service.alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-[#06070A] to-transparent"
        aria-hidden
      />
      <div className="relative z-10 p-4 sm:p-5">
        <h3 className="font-onest text-xl text-text-secondary">
          {service.title}
        </h3>
        <p className="mt-1 text-base font-light text-grey-light">
          {service.description}
        </p>
      </div>
    </article>
  );
};

export default ServiceCard;
