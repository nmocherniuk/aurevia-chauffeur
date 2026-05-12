"use client";

import React from "react";
import { cn } from "@/src/lib/utils";
import { Chevron } from "@/src/components/SVGManager/Chevron";

type SelectTriggerProps = {
  displayText: string;
  placeholder: string | undefined;
  hasSelection: boolean;
  isOpen: boolean;
  disabled: boolean | undefined;
  error?: string | null;
  selectId: string;
  describedBy: string | undefined;
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
  onToggle,
  onKeyDown,
  onBlur,
  onFocus,
}: SelectTriggerProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex h-[46px] max-h-[46px] w-full cursor-pointer items-center text-text-secondary justify-between gap-2 rounded-md border border-grey bg-transparent py-3 px-4 pr-10 text-left font-light text-sm outline-none transition-colors",
        "focus-visible:border-primary",
        "disabled:cursor-not-allowed disabled:bg-background disabled:opacity-60",
        isOpen && "border-primary",
        error && "border-text-error",
        !hasSelection && placeholder && "text-grey",
      )}
      onClick={onToggle}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      aria-labelledby={selectId}
      aria-describedby={describedBy}
    >
      <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
        {displayText || placeholder}
      </span>
      <span
        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center"
        aria-hidden
      >
        <Chevron
          width={20}
          height={20}
          fill={isOpen ? "var(--primary)" : "var(--grey-light)"}
          className={cn("transition-transform", isOpen && "rotate-180")}
        />
      </span>
    </button>
  );
}

export default SelectTrigger;
