import React, { forwardRef, memo } from "react";

import { cn } from "@/src/lib/utils";
import CustomSelect, { type CustomSelectProps } from "../CustomSelect";

export type SelectWithErrorProps = CustomSelectProps & {
  error?: string | null;
};

const SelectWithError = forwardRef<HTMLSelectElement, SelectWithErrorProps>(
  ({ error, id, hint, name, ...props }, ref) => {
    const selectId = id ?? (name ? `field-${name}` : undefined);
    const errorId = selectId ? `${selectId}-error` : undefined;

    const ariaDescribedBy =
      [props["aria-describedby"], error ? errorId : null]
        .filter(Boolean)
        .join(" ") || undefined;

    return (
      <div className={cn("flex flex-col gap-1")}>
        <CustomSelect
          ref={ref}
          id={selectId}
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

SelectWithError.displayName = "SelectWithError";

export default memo(SelectWithError);
