"use client";

import React from "react";
import { cn } from "@/src/lib/utils";
import type { SummaryListProps, SummaryListItem } from "./types";

export function SummaryList({
  items,
  className,
  role = "list",
  "aria-label": ariaLabel,
}: SummaryListProps) {
  if (!items.length) return null;

  return (
    <ul
      role={role}
      aria-label={ariaLabel}
      className={cn(
        "list-disc list-inside  text-sm text-text-secondary font-light flex flex-row flex-wrap gap-2 marker:m-0",
        className
      )}
    >
      {items.map((item, index) => {
        return (
          <li
            key={`${index}-${typeof item === "string" ? item.slice(0, 20) : item.value.slice(0, 20)}`}
            className="text-primary"
          >
            <span className="relative left-[-8px]">
              {typeof item === "string" ? item : item.value}

            </span>
          </li>
        );
      })}
    </ul>
  );
}

export type { SummaryListProps, SummaryListItem } from "./types";
