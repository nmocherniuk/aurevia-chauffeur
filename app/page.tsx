import type { Metadata } from "next";
import { Fragment } from "react/jsx-runtime";
import Link from "next/link";
import Image from "next/image";
import MainSection from "@/src/features/MainSection/MainSection";
import MainContainer from "@/src/components/MainContainer";
import FAQSection from "@/src/features/FAQSection";

const PORTAL_CARDS = [
  {
    title: "Chauffeur",
    description: "Luxury private transportation with professional drivers.",
    href: "/driver",
    image: "/images/hyundai-motor-group.png",
  },
  {
    title: "Security",
    description: "Executive protection and private security coordination.",
    href: "/security",
    image: "/images/luxury-private-bodyguards.png",
  },
];

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Aurevia coordonne des services premium de chauffeur privé et de sécurité privée en France, avec un accompagnement sur mesure.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aurevia - Chauffeur privé et sécurité privée",
    description:
      "Plateforme premium de coordination pour transport privé et sécurité privée.",
    url: "/",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    title: "Aurevia - Chauffeur privé et sécurité privée",
    description:
      "Plateforme premium de coordination pour transport privé et sécurité privée.",
    images: ["/images/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <Fragment>
      <MainSection />
      <MainContainer className="flex flex-col gap-27">
        <section className="w-full" aria-labelledby="who-we-are">
          <h2
            id="who-we-are"
            className="font-benzin text-white text-center text-2xl mb-10 sm:text-start sm:text-[28px] md:text-3xl lg:text-4xl lg:mb-11"
          >
            Aurevia — Coordinated With Precision
          </h2>
          <div className="grid w-full grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-8 lg:gap-10">
            <p className="min-w-0 text-base font-light leading-relaxed text-text-primary">
              Aurevia is a premium coordination platform connecting clients with trusted
              independent professionals in private chauffeur and executive security services.
              We focus on discretion, reliability, and seamless service management from the
              first request to final confirmation.
            </p>

            <p className="min-w-0 text-base font-light leading-relaxed text-text-primary">
              Our network is built around experienced professionals selected for their
              standards of service, responsiveness, and ability to operate in demanding
              environments with complete professionalism. We focus on discretion, reliability, and seamless service coordination
              from the initial request to final confirmation.
            </p>
          </div>
        </section>
        <section
          className="w-full"
          aria-labelledby="portal-heading"
        >
          <h2
            id="portal-heading"
            className="font-benzin text-white text-center text-2xl mb-10 sm:text-start sm:text-[28px] md:text-3xl lg:text-4xl lg:mb-11"
          >
            Choose your experience
          </h2>
          <div className="grid w-full grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-8 lg:gap-10">
            {PORTAL_CARDS.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group relative block min-h-[260px] overflow-hidden rounded-2xl border border-primary/35 bg-black/20 sm:min-h-[300px] md:min-h-[320px]"
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  aria-hidden
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/45 to-black/80" />
                <article className="relative z-10 flex h-full min-h-[260px] flex-col justify-end p-5 sm:min-h-[300px] sm:p-6 md:min-h-[320px]">
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">{card.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-grey-light">
                    {card.description}
                  </p>
                  <span className="mt-3 inline-flex text-sm text-primary transition-colors group-hover:text-white">
                    Enter experience
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </section>
        <FAQSection />
      </MainContainer>
    </Fragment>
  );
}
