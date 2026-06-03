import React from "react";
import Image from "next/image";
import heroImage from "@/public/images/luxury-private-bodyguards.png";
import { Button } from "@/src/components/Button";
import SocialIcons from "@/src/components/SocialIcons";
import { NavButton } from "@/src/components/Button/NavButton";

const MainSecuritySection: React.FC<{
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section id="accueil" className="mb-28 w-full">
      <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden md:h-[900px] md:items-start xl:h-dvh">
        <Image
          className="bg-fit-cover absolute top-0 -z-1 w-full bg-center bg-no-repeat object-cover  object-[center_10%] "
          src={heroImage}
          alt="Hero Background Image"
          fill
          quality={100}
          priority
        />
        <div className="absolute left-0 top-0 z-0 h-full w-full bg-[#06070A]/28" />
        <div
          className="absolute left-0 top-0 z-0 h-full w-full"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 71%, #06070A 100%)",
          }}
        />
        <div className="z-10 mx-auto w-full max-w-[1360px] px-5 sm:px-7 md:px-10 lg:px-20 flex flex-col items-center sm:items-start">
          <article className="z-30 flex flex-col items-center sm:items-start md:px-0">
            <h1 className="mb-3 text-center text-[28px] font-benzin leading-tight text-white sm:text-start sm:max-w-[480px] md:text-[33.8px] md:leading-tight md:max-w-[680px] lg:text-[42px] xl:text-[44px] xl:leading-tight">
              {title}
            </h1>
            <p className="mb-4 max-w-[386px] text-center text-base text-white-100 sm:text-start sm:max-w-[630px] text-text-secondary">
              {subtitle}
            </p>
          </article>
          <SocialIcons classNameContainer="hidden sm:flex mb-4" />
          <NavButton
            href={buttonLink}
            variant="primary"
            className="w-full max-w-[220px]"
          >
            {buttonText}
          </NavButton>
        </div>
      </div>
    </section>
  );
};

export default MainSecuritySection;
