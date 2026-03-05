import React, { FC } from "react";
import InputWithError from "@/src/components/Inputs/InputWithError";
import TextareaWithError from "@/src/components/Inputs/TextareaWithError";
import type { FormStepProps } from "../types";

export const PassengerStep: FC<FormStepProps> = ({
  getValue,
  setValue,
  errors,
  handleBlur,
  handleFocus,
}) => {
  return (
    <div className="grid gap-y-2.5 gap-x-4 grid-cols-1 sm:grid-cols-2">
      <InputWithError
        name="firstName"
        label="Nom"
        placeholder="First name"
        value={(getValue("firstName", false) as string) || ""}
        onChange={(e) => setValue("firstName", e.target.value)}
        onBlur={handleBlur("firstName")}
        onFocus={handleFocus("firstName")}
        error={errors["firstName"]}
      />
      <InputWithError
        name="lastName"
        label="Last name"
        placeholder="Last name"
        value={(getValue("lastName", false) as string) || ""}
        onChange={(e) => setValue("lastName", e.target.value)}
        onBlur={handleBlur("lastName")}
        onFocus={handleFocus("lastName")}
        error={errors["lastName"]}
      />
      <InputWithError
        name="email"
        label="Email"
        placeholder="Email"
        value={(getValue("email", false) as string) || ""}
        onChange={(e) => setValue("email", e.target.value)}
        onBlur={handleBlur("email")}
        onFocus={handleFocus("email")}
        error={errors["email"]}
      />
      <InputWithError
        name="phone"
        label="Phone"
        placeholder="Phone"
        value={(getValue("phone", false) as string) || ""}
        onChange={(e) => setValue("phone", e.target.value)}
        onBlur={handleBlur("phone")}
        onFocus={handleFocus("phone")}
        error={errors["phone"]}
      />
      <div className="sm:col-span-2">
        <TextareaWithError
          name="notesForChauffeur"
          label="Notes for chauffeur"
          placeholder="Optional notes"
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
