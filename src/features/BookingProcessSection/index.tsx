import React, { FC } from "react";
import ProcessStepItem from "@/src/components/ProccessStep/ProcessStepItem";
import ProcessStepsConnector from "@/src/components/ProccessStep/ProcessStepsConnector";

type PopularItineraryStep = {
  id: string;
  title: string;
  description: string;
};

export interface BookingProcessSectionProps {
  title: string;
  items: ReadonlyArray<PopularItineraryStep>;
  circleSize?: number;
}

const BookingProcessSection: FC<BookingProcessSectionProps> = ({
  title,
  items,
  circleSize = 80,
}) => {
  const connectorTop = circleSize / 2;
  const lastIndex = items.length - 1;

  return (
    <section id="itineraires-populaires" className="w-full scroll-mt-24">
      <h2 className="font-benzin text-white text-center text-2xl mb-10 sm:text-start sm:text-[28px] md:text-3xl lg:text-4xl lg:mb-11">
        {title}
      </h2>
      <div className="relative z-10">
        <ProcessStepsConnector
          orientation="horizontal"
          className="absolute z-0 hidden lg:block"
          style={{ top: connectorTop }}
        />

        <div className="grid grid-cols-1 gap-10 sm:gap-12 sm:grid-cols-2 md:gap-x-8 md:gap-y-14 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {items.map((step, index) => (
            <ProcessStepItem
              key={step.title}
              step={index + 1}
              title={step.title}
              description={step.description}
              variant={index === lastIndex ? "active" : "default"}
              circleSize={circleSize}
              className="relative z-10"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingProcessSection;
