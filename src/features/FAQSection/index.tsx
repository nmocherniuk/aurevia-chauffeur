import React, { FC } from "react";
import { FAQ_DATA } from "./data";
import FAQCard from "@/src/components/Layouts/FAQCard";

const FAQSection: FC = () => {
  return (
    <section id="faq" className="mb-28 w-full">
      <h2 className="font-benzin text-white text-center text-2xl mb-10 sm:text-start sm:text-[28px] md:text-3xl lg:text-4xl lg:mb-11">
        Vos Questions, Nos Réponses
      </h2>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {FAQ_DATA.map((faq) => (
          <FAQCard key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
