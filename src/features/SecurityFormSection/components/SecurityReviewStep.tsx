"use client";

import React, { FC } from "react";
import type { FormStepProps } from "@/src/features/FormSection/components/steps/types";
import type { SecurityFormValues } from "../types";
import { getInitialSecurityFormValues } from "../utils/getInitialSecurityFormValues";
import { buildSecurityReviewSections } from "../utils/buildSecurityReviewSections";

function collectValues(getValue: FormStepProps["getValue"]): SecurityFormValues {
  const initial = getInitialSecurityFormValues();
  const out: SecurityFormValues = { ...initial };
  for (const key of Object.keys(initial)) {
    const v = getValue(key, false);
    out[key] = typeof v === "string" ? v : "";
  }
  return out;
}

/** Matches driver {@link PaymentStep} review: wrapped sections, plain `<li>` lines. */
export const SecurityReviewStep: FC<FormStepProps> = ({ getValue }) => {
  const sections = buildSecurityReviewSections(collectValues(getValue));
  const hasReview = sections.some((s) => s.lines.length > 0);

  return (
    <div className="">
      {hasReview ? (
        <div className="overflow-hidden">
          <div className="flex w-full flex-row gap-5 py-4 sm:max-w-full sm:gap-x-12 md:gap-x-17 sm:gap-y-6 flex-wrap">
            {sections.map((section) => (
              <section
                key={section.title}
                className="flex min-w-0 w-full flex-col gap-2 sm:w-auto sm:shrink-0"
              >
                <h3 className="text-sm font-medium text-text-primary">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-1 text-sm font-light text-text-secondary">
                  {section.lines.map((line, index) => (
                    <li key={`${section.title}-${index}`}>{line}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
