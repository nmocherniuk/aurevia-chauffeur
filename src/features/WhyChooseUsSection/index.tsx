import React, { ElementType, FC } from "react";
import CardOutline from "@/src/components/Layouts/CardOutline";

export type WhyChooseUsItem = {
  id: string;
  icon: ElementType;
  title: string;
  description: string;
};

const WhyChooseUsSection: FC<{
  title: string;
  items: ReadonlyArray<WhyChooseUsItem>;
}> = ({ title, items }) => {
  return (
    <section id="pourquoi-nous" className="w-full">
      <h2 className="font-benzin text-white text-center text-2xl mb-10 sm:text-start sm:text-[28px] md:text-3xl lg:text-4xl lg:mb-11">
        {title}
      </h2>
      <div className="flex flex-col gap-5 md:grid lg:grid-cols-2 ">
        {items.map(({ id, icon: Icon, title, description }) => (
          <CardOutline
            key={id}
            className="flex flex-col items-center justify-center px-5 py-6 gap-4 sm:flex-row sm:gap-5 sm:py-5"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center sm:h-8 sm:w-8">
              <Icon className="h-full w-full" />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 sm:items-start sm:gap-1">
              <h3 className="text-text-secondary text-xl font-onest text-center sm:text-left">
                {title}
              </h3>
              <p className="text-base text-text-primary text-center sm:text-left font-light">
                {description}
              </p>
            </div>
          </CardOutline>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
