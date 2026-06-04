"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useContent, useLocale } from "@/src/providers/LocaleProvider";
import { getRoutes } from "@/src/config/routes";
import { Button } from "@/src/components/Button";

const STORAGE_KEY = "riviera-cookie-notice-acknowledged";

export function CookieNotice() {
  const locale = useLocale();
  const { cookieNotice: copy } = useContent();
  const routes = getRoutes(locale);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const acknowledged = localStorage.getItem(STORAGE_KEY);
      if (!acknowledged) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (visible) {
      document.documentElement.dataset.cookieNoticeVisible = "true";
    } else {
      delete document.documentElement.dataset.cookieNoticeVisible;
    }
    return () => {
      delete document.documentElement.dataset.cookieNoticeVisible;
    };
  }, [visible]);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* private mode */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-notice-title"
      aria-describedby="cookie-notice-desc"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/25 bg-[#06070A]/95 px-4 py-4 shadow-[0_-8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md sm:px-6"
    >
      <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="min-w-0 flex-1">
          <p
            id="cookie-notice-title"
            className="text-sm font-medium text-text-secondary"
          >
            {copy.learnMore}
          </p>
          <p
            id="cookie-notice-desc"
            className="mt-1 text-sm font-light leading-relaxed text-text-primary"
          >
            {copy.message}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <Link
            href={routes.legal.cookies}
            className="text-sm text-primary underline-offset-2 hover:underline"
          >
            {copy.learnMore}
          </Link>
          <Button
            type="button"
            variant="primary"
            withArrow={false}
            className="min-w-[140px]"
            onClick={handleAccept}
          >
            {copy.accept}
          </Button>
        </div>
      </div>
    </div>
  );
}
