"use client";

import React, { useState, useEffect, memo } from "react";

import { TimePicker } from "@mantine/dates";
import { cn } from "@/src/lib/utils";
import { Clock } from "../../SVGManager/Clock";

export type TimePickerWithErrorProps = {
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string | null;
  required?: boolean;
  id?: string;
  minTime?: string;
  maxTime?: string;
  withSeconds?: boolean;
};

const TimePickerWithError: React.FC<TimePickerWithErrorProps> = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  required,
  id,
  minTime,
  maxTime,
  withSeconds = false,
}) => {
  const inputId = id ?? (name ? `field-${name}` : "");
  const errorId = `${inputId}-error`;
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (timeString: string) => {
    const syntheticEvent = {
      target: { name, value: timeString },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(syntheticEvent);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const syntheticEvent = {
      target: { name },
      currentTarget: { name },
    } as React.FocusEvent<HTMLInputElement>;
    onBlur(syntheticEvent);
  };

  return (
    <div
      className="group flex w-full flex-col gap-1"
      data-error={error ? "true" : undefined}
    >
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            "flex items-center gap-1 pl-1 text-sm text-text-primary transition-colors",
            isOpen && "text-primary",
          )}
        >
          {label}
          {required ? <span className="ml-1 text-primary">*</span> : null}
        </label>
      )}

      <div className="relative w-full" data-open={isOpen ? "true" : undefined}>
        {mounted ? (
          <TimePicker
            name={name}
            withDropdown
            hoursInputProps={{ id: inputId }}
            popoverProps={{
              onOpen: () => {
                setIsOpen(true);
                onFocus?.({ target: { name } } as React.FocusEvent<HTMLInputElement>);
              },
              onClose: () => setIsOpen(false),
            }}
            value={value || undefined}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(error) || undefined}
            aria-describedby={error ? errorId : undefined}
            min={minTime}
            max={maxTime}
            withSeconds={withSeconds}
            clearable={false}
          />
        ) : (
          <div className="flex h-[46px] w-full items-center rounded-md border border-grey bg-transparent px-4 py-3 pr-10">
            <input
              id={inputId}
              name={name}
              type="text"
              placeholder={placeholder}
              value={value}
              readOnly
              className="w-full border-none bg-transparent text-sm text-text-secondary outline-none placeholder:text-grey"
            />
          </div>
        )}

        <span
          className="pointer-events-none absolute right-3.5 top-1/2 flex -translate-y-1/2 items-center justify-center"
          aria-hidden
        >
          <Clock
            width={15}
            height={16}
            fill={isOpen ? "var(--primary)" : "var(--grey)"}
          />
        </span>
      </div>

      <div
        id={errorId}
        role="alert"
        className="h-[14px] pl-1 text-xs leading-normal text-text-error"
        aria-live="polite"
      >
        {error ?? null}
      </div>
    </div>
  );
};

export default memo(TimePickerWithError);
