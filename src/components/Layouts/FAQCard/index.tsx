"use client";

import React, { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/src/lib/utils";
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
      <CardOutline className=" flex flex-col group/card ">
        <button
          className="flex items-center gap-2 w-full justify-between cursor-pointer p-5"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <h4
            className={cn(
              "text-base transition-colors duration-200 text-left",
              "text-grey group-hover/card:text-text-secondary",
              isOpen && "text-text-secondary",
            )}
          >
            {question}
          </h4>
          <span
            className={cn(
              "flex shrink-0 text-grey transition-colors duration-200 group-hover/card:text-text-secondary",
            )}
          >
            <Chevron
              fill="currentColor"
              className={cn(
                "transition-transform duration-200",
                isOpen && "rotate-180",
              )}
            />
          </span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5">
                <p className="text-text-primary text-base font-light">
                  {answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardOutline>
    </article>
  );
};

export default FAQCard;
