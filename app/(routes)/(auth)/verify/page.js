import OtpPageTitle from "./_components/OtpPageTitle";
import VerifyInputs from "./_components/VerifyInputs";
import OtpForm from "./_components/OtpForm";

export default async function page({ searchParams }) {
  const getParams = await searchParams;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      {getParams?.user ? (
        <>
          <OtpPageTitle title="Verify Your OTP">
            Enter the 6-digit code we sent to your email address.
          </OtpPageTitle>
          <OtpForm userId={getParams?.user}>
            {/* OTP Input */}
            <VerifyInputs />
            {/* Verify Button */}
          </OtpForm>
          {/* Resend OTP */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Didn't receive the code?
              <a href="#" className="text-primary hover:underline">
                Resend OTP
              </a>
            </p>
          </div>
        </>
      ) : (
        <p className="text-center">Something Went wrong!</p>
      )}
    </div>
  );
}
