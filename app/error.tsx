"use client";

import MainContainer from "@/src/components/MainContainer";
import { Button } from "@/src/components/Button";
import { useRouter } from "next/navigation";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <MainContainer className="pt-30">
      <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
          Oups, quelque chose s&apos;est mal passé
        </h1>
        <p className="mt-4 text-sm max-w-[426px] sm:max-w-none md:text-base text-text-primary leading-relaxed text-center">
          Nous n&apos;avons pas pu charger cette page. Veuillez réessayer ou revenir à l&apos;accueil.
        </p>
        <div className="mt-4 flex w-full max-w-[460px] flex-col gap-3 sm:flex-row sm:justify-center">
          <Button variant="secondary" className="w-full sm:w-auto" withArrow={false} onClick={reset}>
            Réessayer
          </Button>
          <Button variant="primary" className="w-full sm:w-auto" withArrow={false} onClick={() => router.push("/")}>
            Retour à l&apos;accueil
          </Button>
        </div>
      </section>
    </MainContainer>
  );
}
