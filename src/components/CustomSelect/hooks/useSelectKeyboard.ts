import { useCallback, useEffect, type RefObject } from "react";
import type { SelectOption } from "../types";

type UseSelectKeyboardParams = {
  dropdownRef: RefObject<HTMLUListElement | null>;
  disabled: boolean | undefined;
  isOpen: boolean;
  focusedIndex: number;
  setFocusedIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  enabledOptions: SelectOption[];
  handleSelect: (value: string) => void;
};

export function useSelectKeyboard({
  dropdownRef,
  disabled,
  isOpen,
  focusedIndex,
  setFocusedIndex,
  setIsOpen,
  enabledOptions,
  handleSelect,
}: UseSelectKeyboardParams): (e: React.KeyboardEvent) => void {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (disabled) return;

      switch (e.key) {
        case "Enter":
        case " ": {
          e.preventDefault();
          if (isOpen && focusedIndex >= 0) {
            const option = enabledOptions[focusedIndex];
            if (option) handleSelect(option.value);
          } else {
            setIsOpen((prev) => !prev);
          }
          break;
        }
        case "ArrowDown": {
          e.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
          } else {
            setFocusedIndex((prev) =>
              prev < enabledOptions.length - 1 ? prev + 1 : prev
            );
          }
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          if (isOpen) {
            setFocusedIndex((prev) => (prev > 0 ? prev - 1 : 0));
          }
          break;
        }
        case "Escape": {
          e.preventDefault();
          setIsOpen(false);
          setFocusedIndex(-1);
          break;
        }
        case "Tab": {
          setIsOpen(false);
          setFocusedIndex(-1);
          break;
        }
      }
    },
    [
      disabled,
      enabledOptions,
      focusedIndex,
      handleSelect,
      isOpen,
      setFocusedIndex,
      setIsOpen,
    ]
  );

  useEffect(() => {
    if (!isOpen || focusedIndex < 0 || !dropdownRef.current) return;
    const focusedElement = dropdownRef.current.children[
      focusedIndex
    ] as HTMLElement;
    if (focusedElement) {
      focusedElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [focusedIndex, isOpen, dropdownRef]);

  return handleKeyDown;
}
