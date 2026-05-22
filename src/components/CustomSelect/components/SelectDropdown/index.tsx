"use client";

import React, { useCallback } from "react";
import { cn } from "@/src/lib/utils";
import type { SelectOption, CustomSelectVariant } from "../../types";
import SelectOptionItem from "../SelectOptionItem";

type SelectDropdownProps = {
  isOpen: boolean;
  options: SelectOption[];
  selectedValue: string;
  focusedIndex: number;
  enabledOptions: SelectOption[];
  listboxId: string;
  variant?: CustomSelectVariant;
  onSelect: (value: string) => void;
  setFocusedIndex: React.Dispatch<React.SetStateAction<number>>;
  dropdownRef: React.RefObject<HTMLUListElement | null>;
};

export default function SelectDropdown({
  isOpen,
  options,
  selectedValue,
  focusedIndex,
  enabledOptions,
  listboxId,
  variant = "default",
  onSelect,
  setFocusedIndex,
  dropdownRef,
}: SelectDropdownProps) {
  const handleMouseLeaveList = useCallback(() => setFocusedIndex(-1), [setFocusedIndex]);

  if (!isOpen) return null;

  return (
    <ul
      ref={dropdownRef}
      className={cn(
        "absolute z-1000 max-h-60 list-none overflow-y-auto overflow-x-hidden rounded-md border border-grey-light bg-white p-1 shadow-lg",
        "animate-[slideDown_0.2s_ease-out]",
        variant === "nav"
          ? "right-0 top-[calc(100%+8px)] min-w-[160px]"
          : "left-0 right-0 top-[calc(100%+7px)]",
      )}
      role="listbox"
      aria-labelledby={listboxId}
      onMouseLeave={handleMouseLeaveList}
    >
      {options.map((option) => {
        const isSelected = option.value === selectedValue;
        const optionIndex = enabledOptions.findIndex((opt) => opt.value === option.value);
        const isFocused = optionIndex === focusedIndex;

        const onMouseLeaveFocus = () => {
          if (optionIndex === focusedIndex) setFocusedIndex(-1);
        };

        return (
          <SelectOptionItem
            key={option.value}
            option={option}
            isSelected={isSelected}
            isFocused={isFocused}
            onSelect={onSelect}
            onFocus={() => setFocusedIndex(optionIndex)}
            onMouseLeaveFocus={onMouseLeaveFocus}
          />
        );
      })}
    </ul>
  );
}
