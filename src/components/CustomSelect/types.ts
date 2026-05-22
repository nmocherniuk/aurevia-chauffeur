import type { ChangeEvent, SelectHTMLAttributes } from "react";

export type SelectOption = {
  value: string;
  label: string;
  /** Короткий текст для compact-тригера (напр. FR / EN у хедері) */
  compactLabel?: string;
  /** Компактний суфікс (напр. "3P • 3L" для capacity), показується справа від label у dropdown і в тригері */
  detail?: string;
  disabled?: boolean;
};

export type CustomSelectVariant = "default" | "nav";

export type CustomSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> & {
  label?: string;
  hideLabel?: boolean;
  variant?: CustomSelectVariant;
  id?: string;
  hint?: string;
  placeholder?: string;
  error?: string | null;
  options: SelectOption[];
  onChange?: (
    e:
      | ChangeEvent<HTMLSelectElement>
      | { target: { name?: string; value: string } },
  ) => void;
};
