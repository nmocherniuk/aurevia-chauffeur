"use client";

import MainContainer from "@/src/components/MainContainer";
import { Button } from "@/src/components/Button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <MainContainer className="pt-30">
      <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
          Page introuvable
        </h1>
        <p className="mt-4 text-sm max-w-[286px] sm:max-w-none md:text-base text-text-primary leading-relaxed text-center">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Button
          variant="primary"
          className="mt-4 w-full max-w-[220px]"
          withArrow={false}
          onClick={() => router.push("/")}
        >
          Retour à l&apos;accueil
        </Button>
      </section>
    </MainContainer>
  );
}
