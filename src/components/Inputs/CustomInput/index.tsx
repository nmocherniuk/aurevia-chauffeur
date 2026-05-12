import React, { forwardRef, memo, useId } from "react";

import { cn } from "@/src/lib/utils";

export type CustomInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "prefix" | "suffix"
> & {
  label: string;
  id?: string;
  hint?: string;
  error?: string | null;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  prefixClassName?: string;
  suffixClassName?: string;
};

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      label,
      id,
      hint,
      className,
      error,
      required,
      disabled,
      prefix,
      suffix,
      prefixClassName,
      suffixClassName,
      name,
      ...props
    },
    ref
  ) => {
    const autoId = useId();
    const inputId = id ?? (name ? `field-${name}` : autoId);
    const hintId = hint ? `${inputId}-hint` : undefined;
    const describedBy =
      [props["aria-describedby"], hintId].filter(Boolean).join(" ") || undefined;

    return (
      <div
        className={cn(
          "group relative flex flex-col gap-1",
          disabled && "opacity-90",
          className
        )}
      >
        <label
          className={cn(
            "pl-1 text-sm text-text-primary transition-colors",
            "group-focus-within:text-primary"
          )}
          htmlFor={inputId}
        >
          {label}
          {required ? <span className="ml-1 text-primary">*</span> : null}
        </label>

        <div
          className={cn(
            "flex w-full items-center rounded-md border border-grey bg-transparent transition-colors",
            "focus-within:border-primary",
            "disabled:bg-background disabled:cursor-not-allowed",
            error && "border-text-error"
          )}
        >
          {prefix ? (
            <span
              className={cn(
                "flex shrink-0 px-3 text-text-primary",
                prefixClassName
              )}
            >
              {prefix}
            </span>
          ) : null}

          <input
            ref={ref}
            id={inputId}
            name={name}
            className={cn(
              "h-[46px] max-h-[46px] w-full flex-1 border-none bg-transparent py-3 px-4 text-sm text-text-secondary outline-none placeholder:text-grey leading-0"
            )}
            disabled={disabled}
            aria-describedby={describedBy}
            {...props}
          />

          {suffix ? (
            <span
              className={cn(
                "flex shrink-0 px-3 font-medium text-primary",
                suffixClassName
              )}
            >
              {suffix}
            </span>
          ) : null}
        </div>

        {hint ? (
          <p id={hintId} className="pl-1 text-xs leading-normal text-text-primary">
            {hint}
          </p>
        ) : null}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default memo(CustomInput);
