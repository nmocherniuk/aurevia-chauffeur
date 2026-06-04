import type { Metadata } from "next";
import { Fragment } from "react/jsx-runtime";
import Link from "next/link";
import Image from "next/image";
import MainSection from "@/src/features/MainSection/MainSection";
import MainContainer from "@/src/components/MainContainer";
import FAQSection from "@/src/features/FAQSection";
import CTABlock from "@/src/components/CTABlock";
import { getContent } from "@/src/content";
import { buildPageMetadata } from "@/src/lib/i18n/metadata";
import { isLocale, type Locale } from "@/src/i18n/config";
import { JsonLd } from "@/src/components/JsonLd";
import { getFaqPageSchema } from "@/src/lib/seo/structuredData";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "fr";

  const titles: Record<Locale, { title: string; description: string }> = {
    fr: {
      title: "Accueil",
      description:
        "Riviera Prime coordonne des services premium de chauffeur privé et de sécurité privée en France, avec un accompagnement sur mesure.",
    },
    en: {
      title: "Home",
      description:
        "Riviera Prime coordinates premium private chauffeur and security services in France with bespoke support.",
    },
  };

  const copy = titles[locale];

  return buildPageMetadata({
    locale,
    path: "/",
    title: copy.title,
    description: copy.description,
    openGraphTitle:
      locale === "fr"
        ? "Riviera Prime - Chauffeur privé et sécurité privée"
        : "Riviera Prime - Private chauffeur and security",
    openGraphDescription:
      locale === "fr"
        ? "Plateforme premium de coordination pour transport privé et sécurité privée."
        : "Premium coordination platform for private transport and security.",
  });
}

export default async function Home({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "fr";
  const { home: homeContent } = getContent(locale);

  return (
    <Fragment>
      <JsonLd data={getFaqPageSchema(homeContent.faqItems)} />
      <MainSection
        title={homeContent.heroSection.title}
        subtitle={homeContent.heroSection.subtitle}
        buttonText={homeContent.heroSection.buttonText}
        buttonLink={homeContent.heroSection.buttonLink}
      />
      <MainContainer className="flex flex-col gap-27">
        <section className="w-full" aria-labelledby="who-we-are">
          <h2
            id="who-we-are"
            className="font-benzin text-white text-center text-2xl mb-10 sm:text-start sm:text-[28px] md:text-3xl lg:text-4xl lg:mb-11"
          >
            {homeContent.whoWeAreTitle}
          </h2>
          <div className="grid w-full grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-8 lg:gap-10">
            <p className="min-w-0 text-base font-light leading-relaxed text-text-primary">
              {homeContent.whoWeAreItems[0]}
            </p>
            <p className="min-w-0 text-base font-light leading-relaxed text-text-primary">
              {homeContent.whoWeAreItems[1]}
            </p>
          </div>
        </section>
        <section
          id="services"
          className="w-full"
          aria-labelledby="portal-heading"
        >
          <h2
            id="portal-heading"
            className="font-benzin text-white text-center text-2xl mb-10 sm:text-start sm:text-[28px] md:text-3xl lg:text-4xl lg:mb-11"
          >
            {homeContent.servicesSectionTitle}
          </h2>
          <div className="grid w-full grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-8 lg:gap-10">
            {homeContent.servicesSection.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative block min-h-[260px] overflow-hidden rounded-2xl border border-primary/35 bg-black/20 sm:min-h-[300px] md:min-h-[320px]"
              >
                <Image
                  src={service.image}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  aria-hidden
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/45 to-black/80" />
                <article className="relative z-10 flex h-full min-h-[260px] flex-col justify-end p-5 sm:min-h-[300px] sm:p-6 md:min-h-[320px]">
                  <h3 className="font-onest text-xl text-text-secondary">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-grey-light">
                    {service.description}
                  </p>
                  <span className="mt-3 inline-flex text-sm text-primary transition-colors group-hover:text-white">
                    {service.buttonText}
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </section>
        <div className="flex flex-col gap-12">
          <FAQSection items={homeContent.faqItems} />
          <CTABlock
            title={homeContent.partnerCta.title}
            description={homeContent.partnerCta.description}
            socialMediaLink
          />
        </div>
      </MainContainer>
    </Fragment>
  );
}
