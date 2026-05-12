"use client";

import React, { useId, useState, useEffect, memo } from "react";

import { DatePickerInput } from "@mantine/dates";
import dayjs from "dayjs";

import "dayjs/locale/fr";
import { cn } from "@/src/lib/utils";
import Calendar from "../../SVGManager/Calendar";
// import Calendar from "@/src/components/SVGManager/Calendar";

dayjs.locale("fr");

export type DatePickerWithErrorProps = {
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string | null;
  required?: boolean;
  id?: string;
  minDate?: Date;
  maxDate?: Date;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const DatePickerWithError: React.FC<DatePickerWithErrorProps> = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  required,
  id,
  minDate,
  maxDate,
  onFocus,
}) => {
  const inputId = id ?? (name ? `field-${name}` : "");
  const errorId = `${inputId}-error`;
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (dateString: string | null) => {
    const syntheticEvent = {
      target: { name, value: dateString ?? "" },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(syntheticEvent);
  };

  const handleBlur = () => {
    const syntheticEvent = {
      target: { name },
      currentTarget: { name },
    } as React.FocusEvent<HTMLInputElement>;
    onBlur(syntheticEvent);
  };

  return (
    <div
      className="group flex w-full flex-col gap-1"
      data-error={error && !isOpen ? "true" : undefined}
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

      <div className="relative" data-open={isOpen ? "true" : undefined}>
        {mounted ? (
          <DatePickerInput
            id={inputId}
            name={name}
            popoverProps={{
              onOpen: () => {
                setIsOpen(true);
                onFocus?.({
                  target: { name },
                } as React.FocusEvent<HTMLInputElement>);
              },
              onClose: () => setIsOpen(false),
            }}
            placeholder={placeholder}
            value={value || null}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(error) || undefined}
            aria-describedby={error ? errorId : undefined}
            locale="fr"
            minDate={minDate}
            maxDate={maxDate}
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
          <Calendar
            width={17}
            height={17}
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
        {error && !isOpen ? error : null}
      </div>
    </div>
  );
};

export default memo(DatePickerWithError);
