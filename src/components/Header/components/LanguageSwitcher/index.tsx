"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import CustomSelect from "@/src/components/CustomSelect";
import {
  locales,
  localeLabels,
  localeNames,
  type Locale,
} from "@/src/i18n/config";
import { switchLocalePath } from "@/src/i18n/paths";
import { cn } from "@/src/lib/utils";
import { useLocale } from "@/src/providers/LocaleProvider";

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const options = useMemo(
    () =>
      locales.map((locale) => ({
        value: locale,
        label: localeNames[locale].toUpperCase(),
        compactLabel: localeLabels[locale],
      })),
    [],
  );

  return (
    <CustomSelect
      variant="nav"
      hideLabel
      aria-label="Language"
      value={currentLocale}
      options={options}
      className={cn(className)}
      onChange={(event) => {
        const nextLocale = event.target.value as Locale;
        if (nextLocale === currentLocale) return;
        router.push(switchLocalePath(pathname, nextLocale));
      }}
    />
  );
}
