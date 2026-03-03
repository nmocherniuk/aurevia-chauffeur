"use client";

import React from "react";
import { cn } from "@/src/lib/utils";
import type { SelectOption } from "../../types";

type SelectOptionItemProps = {
  option: SelectOption;
  isSelected: boolean;
  isFocused: boolean;
  onSelect: (value: string) => void;
  onFocus: () => void;
  onMouseLeaveFocus: () => void;
};

function SelectOptionItem({
  option,
  isSelected,
  isFocused,
  onSelect,
  onFocus,
  onMouseLeaveFocus,
}: SelectOptionItemProps) {
  const isDisabled = option.disabled;

  return (
    <li
      className={cn(
        "flex cursor-pointer items-center py-2.5 px-3 text-sm text-black transition-colors",
        "hover:bg-black/5",
        isFocused && "bg-black/5",
        isSelected && "bg-primary/10 font-medium",
        isSelected && isFocused && "bg-primary/15",
        isDisabled && "cursor-not-allowed opacity-50 pointer-events-none"
      )}
      role="option"
      aria-selected={isSelected}
      onClick={() => !isDisabled && onSelect(option.value)}
      onMouseEnter={() => !isDisabled && onFocus()}
      onMouseLeave={onMouseLeaveFocus}
    >
      {option.label}
    </li>
  );
}

export default SelectOptionItem;
