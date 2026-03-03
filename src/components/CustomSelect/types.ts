import type { ChangeEvent, SelectHTMLAttributes } from "react";

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type CustomSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> & {
  label: string;
  id?: string;
  hint?: string;
  placeholder?: string;
  error?: string | null;
  options: SelectOption[];
  onChange?: (
    e: ChangeEvent<HTMLSelectElement> | { target: { name?: string; value: string } }
  ) => void;
};
