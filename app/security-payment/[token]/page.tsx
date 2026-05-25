import type { Metadata } from "next";
import MainContainer from "@/src/components/MainContainer";
import { SecurityPaymentView } from "@/src/features/SecurityPayment/SecurityPaymentView";

type PageProps = {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ redirect_status?: string }>;
};

export const metadata: Metadata = {
  title: "Paiement sécurité",
  description:
    "Finalisez votre paiement sécurisé pour votre réservation de service de sécurité privée Riviera Prime.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function SecurityPaymentPage({
  params,
  searchParams,
}: PageProps) {
  const { token } = await params;
  const sp = await searchParams;

  return (
    <MainContainer className="flex min-h-0 w-full flex-1 flex-col pt-32">
      <SecurityPaymentView
        token={token}
        redirectStatus={sp.redirect_status ?? null}
      />
    </MainContainer>
  );
}
