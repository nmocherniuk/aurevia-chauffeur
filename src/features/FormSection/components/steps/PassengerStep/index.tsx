import React, { FC } from "react";
import InputWithError from "@/src/components/Inputs/InputWithError";
import TextareaWithError from "@/src/components/Inputs/TextareaWithError";
import { useContent } from "@/src/providers/LocaleProvider";
import type { FormStepProps } from "../types";

export const PassengerStep: FC<FormStepProps> = ({
  getValue,
  setValue,
  errors,
  handleBlur,
  handleFocus,
}) => {
  const { bookingForm: t } = useContent();

  return (
    <div className="grid gap-y-2.5 gap-x-4 grid-cols-1 sm:grid-cols-2">
      <InputWithError
        name="firstName"
        label={t.passenger.firstName.label}
        placeholder={t.passenger.firstName.placeholder}
        value={(getValue("firstName", false) as string) || ""}
        onChange={(e) => setValue("firstName", e.target.value)}
        onBlur={handleBlur("firstName")}
        onFocus={handleFocus("firstName")}
        error={errors["firstName"]}
      />
      <InputWithError
        name="lastName"
        label={t.passenger.lastName.label}
        placeholder={t.passenger.lastName.placeholder}
        value={(getValue("lastName", false) as string) || ""}
        onChange={(e) => setValue("lastName", e.target.value)}
        onBlur={handleBlur("lastName")}
        onFocus={handleFocus("lastName")}
        error={errors["lastName"]}
      />
      <InputWithError
        name="email"
        label={t.passenger.email.label}
        placeholder={t.passenger.email.placeholder}
        value={(getValue("email", false) as string) || ""}
        onChange={(e) => setValue("email", e.target.value)}
        onBlur={handleBlur("email")}
        onFocus={handleFocus("email")}
        error={errors["email"]}
      />
      <InputWithError
        name="phone"
        label={t.passenger.phone.label}
        placeholder={t.passenger.phone.placeholder}
        value={(getValue("phone", false) as string) || ""}
        onChange={(e) => setValue("phone", e.target.value)}
        onBlur={handleBlur("phone")}
        onFocus={handleFocus("phone")}
        error={errors["phone"]}
      />
      <div className="sm:col-span-2">
        <TextareaWithError
          name="notesForChauffeur"
          label={t.passenger.notes.label}
          placeholder={t.passenger.notes.placeholder}
          value={(getValue("notesForChauffeur", false) as string) || ""}
          onChange={(e) => setValue("notesForChauffeur", e.target.value)}
          onBlur={handleBlur("notesForChauffeur")}
          onFocus={handleFocus("notesForChauffeur")}
          error={errors["notesForChauffeur"]}
        />
      </div>
    </div>
  );
};
