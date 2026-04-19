import MainContainer from "@/src/components/MainContainer";
import { SecurityPaymentView } from "@/src/features/SecurityPayment/SecurityPaymentView";

type PageProps = {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ redirect_status?: string }>;
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
