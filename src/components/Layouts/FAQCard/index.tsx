"use client";

import React, { FC, useState } from "react";
import CardOutline from "../CardOutline";
import { Chevron } from "../../SVGManager/Chevron";

interface FAQCardProps {
  question: string;
  answer: string;
}

const FAQCard: FC<FAQCardProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <article>
      <CardOutline className=" flex flex-col ">
        <button
          className="flex items-center gap-2 w-full justify-between cursor-pointer p-5"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <h4 className="text-text-secondary text-base">{question}</h4>
          <Chevron fill="var(--color-grey)" />
        </button>
        {isOpen && (
          <div className="px-5 pb-5">
            <p className="text-text-primary text-base font-light">{answer}</p>
          </div>
        )}
      </CardOutline>
    </article>
  );
};

export default FAQCard;
