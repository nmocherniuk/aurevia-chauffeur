import React from "react";
import CardOutline from "../Layouts/CardOutline";
import { NavButton } from "@/src/components/Button/NavButton";
import { Link } from "../SVGManager/Link";
import SocialIcons from "../SocialIcons";

interface CTABlockProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  id?: string;
  socialMediaLink?: boolean;
}

const CTABlock: React.FC<CTABlockProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  id,
  socialMediaLink = false,
}) => {
  return (
    <section id={id}>
      <CardOutline className="py-8 px-6 flex flex-col items-center gap-7 sm:justify-center sm:px-8 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:max-w-[535px]">
          <Link className="shrink-0" />
          <div className="flex flex-col gap-3 sm:gap-2">
            <h3 className="text-text-secondary text-xl text-center sm:text-left">
              {title}
            </h3>
            <p className="text-text-primary text-base text-center sm:text-left font-light">
              {description}
            </p>
          </div>
        </div>

        {socialMediaLink ? (
          <SocialIcons classNameIcon="border border-primary rounded-full" />
        ) : (
          <NavButton
            href={buttonLink!}
            variant="primary"
            className="w-full sm:max-w-[220px]"
          >
            {buttonText}
          </NavButton>
        )}
      </CardOutline>
    </section>
  );
};

export default CTABlock;
