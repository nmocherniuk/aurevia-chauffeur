export type SummaryListItem =
  | string
  | { value: string; highlight?: boolean };

export type SummaryListProps = {
  /** Елементи списку — рядки або об'єкти з value та опційним highlight */
  items: SummaryListItem[];
  /** Додатковий клас для контейнера */
  className?: string;
  /** Роль для a11y (за замовчуванням "list") */
  role?: "list" | "region";
  /** aria-label для списку */
  "aria-label"?: string;
};
