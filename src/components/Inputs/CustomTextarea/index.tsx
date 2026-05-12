import React, { forwardRef, useId } from "react";

import { cn } from "@/src/lib/utils";

export type CustomTextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    id?: string;
    hint?: string;
    error?: string | null;
  };

const CustomTextarea = forwardRef<HTMLTextAreaElement, CustomTextareaProps>(
  (
    { label, id, hint, error, className, required, disabled, name, ...props },
    ref
  ) => {
    const autoId = useId();
    const textareaId = id ?? (name ? `field-${name}` : autoId);
    const hintId = hint ? `${textareaId}-hint` : undefined;
    const describedBy =
      [props["aria-describedby"], hintId].filter(Boolean).join(" ") ||
      undefined;

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
          htmlFor={textareaId}
        >
          {label}
          {required ? <span className="ml-1 text-primary">*</span> : null}
        </label>

        <div
          className={cn(
            "flex w-full rounded-md border border-grey bg-transparent transition-colors",
            "focus-within:border-primary",
            "disabled:bg-background disabled:cursor-not-allowed",
            error && "border-text-error"
          )}
        >
          <textarea
            ref={ref}
            id={textareaId}
            name={name}
            className={cn(
              "min-h-[120px] w-full resize-y border-none bg-transparent py-3 px-4 text-sm leading-normal text-text-secondary outline-none placeholder:text-grey"
            )}
            disabled={disabled}
            aria-describedby={describedBy}
            {...props}
          />
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

CustomTextarea.displayName = "CustomTextarea";

export default CustomTextarea;
