"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import type { SecurityService } from "@/src/features/ServicesSection/data";
import { cn } from "@/src/lib/utils";

interface ServiceSecurityProps {
    service: SecurityService;
    className?: string;
    wide?: boolean;
}

const ServiceSecurity: FC<ServiceSecurityProps> = ({
    service,
    className,
    wide = false,
}) => {
    const [expanded, setExpanded] = useState(false);
    const [isNarrow, setIsNarrow] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 1023px)");
        const sync = () => setIsNarrow(mq.matches);
        sync();
        mq.addEventListener("change", sync);
        return () => mq.removeEventListener("change", sync);
    }, []);

    const toggleIfNarrow = () => {
        if (!isNarrow) return;
        setExpanded((v) => !v);
    };

    return (
        <article
            suppressHydrationWarning
            role={isNarrow ? "button" : undefined}
            tabIndex={isNarrow ? 0 : undefined}
            aria-expanded={isNarrow ? expanded : undefined}
            aria-controls={isNarrow ? `service-highlights-${service.id}` : undefined}
            className={cn(
                "group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0B] outline-none  min-h-[490px] lg:min-h-[490px]",
                "max-lg:cursor-pointer lg:cursor-default",
                isNarrow && "focus-visible:ring-2 focus-visible:ring-primary/35",
                className,
            )}
            onClick={toggleIfNarrow}
            onKeyDown={(e) => {
                if (!isNarrow) return;
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setExpanded((v) => !v);
                }
            }}
        >
            <div className="pointer-events-none absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className={cn(
                        "object-cover object-center",
                        service.id === "service-1" &&
                        "max-md:object-top md:object-center",
                    )}
                    sizes={
                        wide
                            ? "(max-width: 768px) 100vw, (max-width: 1024px) 100vw, min(896px, 66vw)"
                            : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                    quality={90}
                />
            </div>
            <div
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#06070A] from-10% via-[#06070A]/70 to-transparent"
                aria-hidden
            />
            <div className="relative z-10 p-4 text-left sm:p-5">
                <p className="mb-1 font-onest text-sm text-primary lg:hidden">
                    {expanded ? "Masquer les détails" : "Appuyer sur la carte"}
                </p>
                <p className="mb-1 hidden font-onest text-sm text-primary lg:block">
                    Hover to see more
                </p>
                <h3 className="font-onest text-xl font-semibold text-text-secondary">
                    {service.title}
                </h3>
                <p className="mt-1 text-base font-light text-grey-light">
                    {service.description}
                </p>
                <ul
                    id={`service-highlights-${service.id}`}
                    aria-label={`Détails : ${service.title}`}
                    aria-hidden={isNarrow ? !expanded : undefined}
                    className={cn(
                        "block overflow-hidden list-none space-y-2 border-t transition-[max-height,opacity,margin,padding,border-color] duration-500 ease-out",
                        // mobile / tablet: same motion as desktop hover (max-h + opacity + border + spacing)
                        expanded
                            ? "max-lg:pointer-events-auto max-lg:mt-3 max-lg:max-h-[min(55vh,360px)] max-lg:border-white/10 max-lg:pt-3 max-lg:opacity-100"
                            : "max-lg:pointer-events-none max-lg:mt-0 max-lg:max-h-0 max-lg:border-transparent max-lg:pt-0 max-lg:opacity-0",
                        // desktop: hover
                        "lg:mt-0 lg:max-h-0 lg:border-transparent lg:pt-0 lg:opacity-0 lg:pointer-events-none",
                        "lg:group-hover:pointer-events-auto lg:group-hover:mt-3 lg:group-hover:max-h-[min(55vh,360px)] lg:group-hover:border-white/10 lg:group-hover:pt-3 lg:group-hover:opacity-100",
                    )}
                >
                    {service.highlights.map((line) => (
                        <li
                            key={line}
                            className="flex gap-2.5 text-sm font-light leading-snug text-grey-light"
                        >
                            <span
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                                aria-hidden
                            />
                            <span>{line}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default ServiceSecurity;
