import { notFound } from "next/navigation";
import { locales, isLocale, type Locale } from "@/src/i18n/config";
import { LocaleProvider } from "@/src/providers/LocaleProvider";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <LocaleProvider locale={locale as Locale}>
      <Header />
      <main className="flex min-h-0 w-full min-w-0 flex-1 flex-col">{children}</main>
      <Footer />
    </LocaleProvider>
  );
}
