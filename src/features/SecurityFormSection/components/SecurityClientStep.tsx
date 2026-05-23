"use client";

import React, { FC } from "react";
import InputWithError from "@/src/components/Inputs/InputWithError";
import type { FormStepProps } from "@/src/features/FormSection/components/steps/types";
import { useContent } from "@/src/providers/LocaleProvider";

export const SecurityClientStep: FC<FormStepProps> = ({
  getValue,
  setValue,
  errors,
  handleBlur,
  handleFocus,
}) => {
  const { securityForm } = useContent();
  const copy = securityForm.client;

  return (
    <div className="grid gap-y-2.5 gap-x-4 grid-cols-1 sm:grid-cols-2">
      <InputWithError
        name="firstName"
        label={copy.firstName.label}
        placeholder={copy.firstName.placeholder}
        value={(getValue("firstName", false) as string) || ""}
        onChange={(e) => setValue("firstName", e.target.value)}
        onBlur={handleBlur("firstName")}
        onFocus={handleFocus("firstName")}
        error={errors["firstName"]}
      />
      <InputWithError
        name="lastName"
        label={copy.lastName.label}
        placeholder={copy.lastName.placeholder}
        value={(getValue("lastName", false) as string) || ""}
        onChange={(e) => setValue("lastName", e.target.value)}
        onBlur={handleBlur("lastName")}
        onFocus={handleFocus("lastName")}
        error={errors["lastName"]}
      />
      <InputWithError
        name="email"
        label={copy.email.label}
        placeholder={copy.email.placeholder}
        value={(getValue("email", false) as string) || ""}
        onChange={(e) => setValue("email", e.target.value)}
        onBlur={handleBlur("email")}
        onFocus={handleFocus("email")}
        error={errors["email"]}
      />
      <InputWithError
        name="phone"
        label={copy.phone.label}
        placeholder={copy.phone.placeholder}
        value={(getValue("phone", false) as string) || ""}
        onChange={(e) => setValue("phone", e.target.value)}
        onBlur={handleBlur("phone")}
        onFocus={handleFocus("phone")}
        error={errors["phone"]}
      />
    </div>
  );
};
