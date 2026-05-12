import React, { forwardRef } from "react";

import { cn } from "@/src/lib/utils";
import CustomTextarea, { type CustomTextareaProps } from "../CustomTextarea";

export type TextareaWithErrorProps = CustomTextareaProps & {
  error?: string | null;
};

const TextareaWithError = forwardRef<
  HTMLTextAreaElement,
  TextareaWithErrorProps
>(({ error, id, hint, name, ...props }, ref) => {
  const textareaId = id ?? (name ? `field-${name}` : undefined);
  const errorId = textareaId ? `${textareaId}-error` : undefined;

  const ariaDescribedBy =
    [props["aria-describedby"], error ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div className={cn("flex flex-col gap-1")}>
      <CustomTextarea
        ref={ref}
        id={textareaId}
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
});

TextareaWithError.displayName = "TextareaWithError";

export default TextareaWithError;
