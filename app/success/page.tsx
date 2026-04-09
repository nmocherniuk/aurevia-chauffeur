import MainContainer from "@/src/components/MainContainer";
import Link from "next/link";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{
    payment_intent?: string;
    redirect_status?: string;
  }>;
}) {
  const params = await searchParams;
  const isSuccess = params.redirect_status === "succeeded";

  return (
    <MainContainer className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
      {isSuccess ? (
        <>
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="font-benzin text-2xl text-white sm:text-3xl">
            Payment Successful
          </h1>
          <p className="text-text-secondary text-sm max-w-md">
            Your booking has been confirmed. You will receive a confirmation
            email shortly.
          </p>
        </>
      ) : (
        <>
          <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h1 className="font-benzin text-2xl text-white sm:text-3xl">
            Payment Issue
          </h1>
          <p className="text-text-secondary text-sm max-w-md">
            There was an issue processing your payment. Please try again or
            contact support.
          </p>
        </>
      )}

      <Link
        href="/"
        className="bg-primary text-white rounded-lg py-2 h-[42px] px-5 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#AC8458] mt-4"
      >
        Return to Home
      </Link>
    </MainContainer>
  );
}
