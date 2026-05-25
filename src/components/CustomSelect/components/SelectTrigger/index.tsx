"use client";

import React from "react";
import { cn } from "@/src/lib/utils";
import { Chevron } from "@/src/components/SVGManager/Chevron";
import type { CustomSelectVariant } from "../../types";

type SelectTriggerProps = {
  displayText: string;
  placeholder: string | undefined;
  hasSelection: boolean;
  isOpen: boolean;
  disabled: boolean | undefined;
  error?: string | null;
  selectId: string;
  describedBy: string | undefined;
  variant?: CustomSelectVariant;
  ariaLabel?: string;
  onToggle: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onBlur: (e: React.FocusEvent<HTMLButtonElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLButtonElement>) => void;
};

function SelectTrigger({
  displayText,
  placeholder,
  hasSelection,
  isOpen,
  disabled,
  error,
  selectId,
  describedBy,
  variant = "default",
  ariaLabel,
  onToggle,
  onKeyDown,
  onBlur,
  onFocus,
}: SelectTriggerProps) {
  const isNav = variant === "nav";

  return (
    <button
      type="button"
      className={cn(
        "relative flex cursor-pointer items-center outline-none transition-colors",
        isNav
          ? cn(
              "group inline-flex h-auto w-auto items-center gap-1.5 px-1 pb-0.5 pr-5 text-base font-light leading-none text-text-secondary",
              "hover:text-primary focus-visible:text-primary",
              isOpen && "text-primary",
            )
          : cn(
              "h-[46px] max-h-[46px] w-full justify-between gap-2 rounded-md border border-grey bg-transparent py-3 px-4 pr-10 text-left text-sm font-light text-text-secondary",
              "focus-visible:border-primary",
              "disabled:cursor-not-allowed disabled:bg-background disabled:opacity-60",
              isOpen && "border-primary text-primary",
              error && "border-text-error",
              !hasSelection && placeholder && "text-grey",
            ),
      )}
      onClick={onToggle}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      aria-labelledby={ariaLabel ? undefined : selectId}
      aria-label={ariaLabel}
      aria-describedby={describedBy}
    >
      <span className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
        {displayText || placeholder}
      </span>
      <span
        className={cn(
          "pointer-events-none absolute flex items-center justify-center text-inherit transition-colors",
          isNav ? "right-0 top-1/2 -translate-y-1/2" : "right-4 top-1/2 -translate-y-1/2",
        )}
        aria-hidden
      >
        <Chevron
          width={isNav ? 14 : 20}
          height={isNav ? 14 : 20}
          fill="currentColor"
          className={cn("transition-transform", isOpen && "rotate-180")}
        />
      </span>
    </button>
  );
}

export default SelectTrigger;
