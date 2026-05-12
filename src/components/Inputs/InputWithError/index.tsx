import React, { forwardRef, memo } from "react";

import { cn } from "@/src/lib/utils";
import CustomInput, { type CustomInputProps } from "../CustomInput";

export type InputWithErrorProps = CustomInputProps & {
  error?: string | null;
};

const InputWithError = forwardRef<HTMLInputElement, InputWithErrorProps>(
  ({ error, id, hint, name, ...props }, ref) => {
    const inputId = id ?? (name ? `field-${name}` : undefined);
    const errorId = inputId ? `${inputId}-error` : undefined;
    const ariaDescribedBy =
      [props["aria-describedby"], error ? errorId : null]
        .filter(Boolean)
        .join(" ") || undefined;

    return (
      <div className={cn("flex flex-col gap-1")}>
        <CustomInput
          ref={ref}
          id={inputId}
          name={name}
          error={error}
          hint={error ? undefined : hint}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={ariaDescribedBy}
          {...props}
        />

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
  },
);

InputWithError.displayName = "InputWithError";

export default memo(InputWithError);
