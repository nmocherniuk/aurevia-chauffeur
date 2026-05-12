"use client";

import React, {
  forwardRef,
  useId,
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  memo,
} from "react";

import { cn } from "@/src/lib/utils";
import { useClickOutside } from "./hooks/useClickOutside";
import { useSelectKeyboard } from "./hooks/useSelectKeyboard";
import SelectTrigger from "./components/SelectTrigger";
import SelectDropdown from "./components/SelectDropdown";

export type { SelectOption, CustomSelectProps } from "./types";
import type { CustomSelectProps } from "./types";

const CustomSelect = forwardRef<HTMLSelectElement, CustomSelectProps>(
  (
    {
      label,
      id,
      hint,
      placeholder,
      className,
      required,
      disabled,
      error,
      options,
      name,
      value,
      defaultValue,
      onChange,
      onBlur,
      onFocus,
      ...props
    },
    ref,
  ) => {
    const autoId = useId();
    const selectId = id ?? (name ? `field-${name}` : autoId);
    const hintId = hint ? `${selectId}-hint` : undefined;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string>(
      value?.toString() || defaultValue?.toString() || "",
    );
    const [focusedIndex, setFocusedIndex] = useState<number>(-1);

    const containerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLUListElement>(null);
    const hiddenSelectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
      if (value !== undefined) setSelectedValue(value.toString());
    }, [value]);

    const selectedOption = options.find((opt) => opt.value === selectedValue);
    const displayText = selectedOption
      ? selectedOption.detail
        ? `${selectedOption.label} · ${selectedOption.detail}`
        : selectedOption.label
      : (placeholder ?? "");

    const enabledOptions = useMemo(
      () => options.filter((opt) => !opt.disabled),
      [options],
    );

    const closeDropdown = useCallback(() => {
      setIsOpen(false);
      setFocusedIndex(-1);
    }, []);

    useClickOutside(containerRef, isOpen, closeDropdown);

    const handleSelect = useCallback(
      (optionValue: string) => {
        setSelectedValue(optionValue);
        setIsOpen(false);
        setFocusedIndex(-1);

        if (hiddenSelectRef.current) {
          hiddenSelectRef.current.value = optionValue;
          const syntheticEvent = {
            target: { name: name ?? "", value: optionValue },
            currentTarget: { name: name ?? "", value: optionValue },
          } as React.ChangeEvent<HTMLSelectElement>;
          onChange?.(syntheticEvent);
          hiddenSelectRef.current.dispatchEvent(
            new Event("change", { bubbles: true }),
          );
        }
      },
      [name, onChange],
    );

    const handleKeyDown = useSelectKeyboard({
      dropdownRef,
      disabled,
      isOpen,
      focusedIndex,
      setFocusedIndex,
      setIsOpen,
      enabledOptions,
      handleSelect,
    });

    const handleToggle = useCallback(() => {
      if (disabled) return;
      setIsOpen((prev) => {
        if (!prev) {
          const idx = enabledOptions.findIndex(
            (opt) => opt.value === selectedValue,
          );
          setFocusedIndex(idx >= 0 ? idx : 0);
        }
        return !prev;
      });
    }, [disabled, enabledOptions, selectedValue]);

    const handleTriggerBlur = useCallback(
      (e: React.FocusEvent<HTMLButtonElement>) => {
        if (
          !containerRef.current?.contains(e.relatedTarget as Node) &&
          onBlur
        ) {
          const syntheticEvent = {
            target: { name: name ?? "", value: selectedValue },
            currentTarget: { name: name ?? "", value: selectedValue },
          } as React.FocusEvent<HTMLSelectElement>;
          onBlur(syntheticEvent);
        }
      },
      [name, onBlur, selectedValue],
    );

    const describedBy =
      [props["aria-describedby"], hintId].filter(Boolean).join(" ") ||
      undefined;

    return (
      <div
        ref={containerRef}
        className={cn(
          "relative flex flex-col gap-1",
          disabled && "opacity-90",
          className,
        )}
      >
        <label
          className={cn(
            "pl-1 text-sm text-text-primary transition-colors",
            "focus-within:text-primary",
            isOpen && "text-primary",
          )}
          htmlFor={selectId}
        >
          {label}
          {required ? <span className="ml-1 text-primary">*</span> : null}
        </label>

        <div className="relative w-full">
          <select
            ref={(node) => {
              hiddenSelectRef.current = node;
              if (typeof ref === "function") ref(node);
              else if (ref)
                (
                  ref as React.MutableRefObject<HTMLSelectElement | null>
                ).current = node;
            }}
            id={selectId}
            name={name}
            value={selectedValue}
            disabled={disabled}
            onChange={(e) => onChange?.(e)}
            aria-hidden="true"
            tabIndex={-1}
            className="absolute h-px w-px opacity-0 pointer-events-none"
            {...props}
          >
            {placeholder ? (
              <option value="" disabled>
                {placeholder}
              </option>
            ) : null}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>

          <SelectTrigger
            displayText={displayText}
            placeholder={placeholder}
            hasSelection={!!selectedOption}
            isOpen={isOpen}
            disabled={disabled}
            error={error}
            selectId={selectId}
            describedBy={describedBy}
            onToggle={handleToggle}
            onKeyDown={handleKeyDown}
            onBlur={handleTriggerBlur}
            onFocus={onFocus ? () => (onFocus as () => void)() : undefined}
          />

          <SelectDropdown
            isOpen={isOpen}
            options={options}
            selectedValue={selectedValue}
            focusedIndex={focusedIndex}
            enabledOptions={enabledOptions}
            listboxId={selectId}
            onSelect={handleSelect}
            setFocusedIndex={setFocusedIndex}
            dropdownRef={dropdownRef}
          />
        </div>

        {hint ? (
          <p
            id={hintId}
            className="pl-1 text-xs leading-normal text-text-primary"
          >
            {hint}
          </p>
        ) : null}
      </div>
    );
  },
);

CustomSelect.displayName = "CustomSelect";

export default memo(CustomSelect);
