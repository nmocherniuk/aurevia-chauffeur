"use client";

import { createContext, useContext, type ReactNode } from "react";
import { getContent, type SiteContent } from "@/src/content";
import type { Locale } from "@/src/i18n/config";

const LocaleContext = createContext<Locale>("fr");
const ContentContext = createContext<SiteContent>(getContent("fr"));

type LocaleProviderProps = {
  locale: Locale;
  children: ReactNode;
};

export function LocaleProvider({ locale, children }: LocaleProviderProps) {
  const content = getContent(locale);

  return (
    <LocaleContext.Provider value={locale}>
      <ContentContext.Provider value={content}>{children}</ContentContext.Provider>
    </LocaleContext.Provider>
  );
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

export function useContent(): SiteContent {
  return useContext(ContentContext);
}
