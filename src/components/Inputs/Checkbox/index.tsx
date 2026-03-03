import React, { forwardRef, useId } from "react";

import { cn } from "@/src/lib/utils";

export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label: React.ReactNode;
  id?: string;
  hint?: React.ReactNode;
  error?: string | null;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { label, id, hint, error, className, disabled, required, name, ...props },
    ref
  ) => {
    const autoId = useId();
    const inputId = id ?? (name ? `field-${name}` : autoId);

    const hintId = hint ? `${inputId}-hint` : undefined;
    const errorId = `${inputId}-error`;
    const describedBy =
      [props["aria-describedby"], error ? errorId : hintId]
        .filter(Boolean)
        .join(" ") || undefined;

    return (
      <div className={cn("flex flex-col gap-1.5", className)}>
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className="peer absolute h-px w-px overflow-hidden whitespace-nowrap border-0 opacity-0 [clip:rect(0,0,0,0)] [clip-path:inset(50%)]"
          disabled={disabled}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={describedBy}
          {...props}
        />

        <label
          htmlFor={inputId}
          className={cn(
            "inline-flex cursor-pointer select-none items-center gap-3",
            "peer-disabled:cursor-not-allowed peer-disabled:opacity-60",
            "peer-focus-visible:[&_.box]:border-primary",
            "peer-checked:[&_.box]:border-primary peer-checked:[&_.box]:bg-primary peer-checked:[&_.box]:after:opacity-100 peer-checked:[&_.box]:after:delay-100",
            "peer-aria-invalid:[&_.box]:border-text-error",
            "peer-aria-invalid:peer-checked:[&_.box]:border-text-error peer-aria-invalid:peer-checked:[&_.box]:bg-text-error"
          )}
        >
          <span
            aria-hidden
            className={cn(
              "box relative flex h-[19px] w-[19px] min-h-[19px] min-w-[19px] shrink-0 rounded-sm border-[1.6px] border-grey bg-transparent transition-colors duration-150 ease-out",
              "grid place-items-center",
              "after:absolute after:left-1/2 after:top-1/2 after:h-[5px] after:w-2.5 after:border-b-2 after:border-l-2 after:border-white after:opacity-0 after:content-[''] after:transform-[translate(-51%,-75%)_rotate(-45deg)] after:transition-opacity after:duration-150 after:ease-out"
            )}
          />
          <span className="min-w-0 flex-1 text-sm leading-normal text-text-primary [&_a]:text-primary [&_a]:underline">
            {label}
            {required ? <span className="ml-1 text-primary">*</span> : null}
          </span>
        </label>

        {!error && hint ? (
          <p id={hintId} className="pl-[34px] text-xs leading-normal text-text-primary">
            {hint}
          </p>
        ) : null}

        {error ? (
          <span
            id={errorId}
            role="alert"
            className="min-h-[17px] pl-[34px] text-xs leading-normal text-text-error"
          >
            {error}
          </span>
        ) : null}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
