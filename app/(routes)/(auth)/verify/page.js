import Button from "@/app/components/Button";
import OtpPageTitle from "./_components/OtpPageTitle";
import VerifyInputs from "./_components/VerifyInputs";
import Link from "next/link";

export default function page() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <OtpPageTitle title="Verify Your OTP">
        Enter the 6-digit code we sent to your email or phone number.
      </OtpPageTitle>
      <form action="#" method="POST">
        {/* OTP Input */}
        <VerifyInputs />
        {/* Verify Button */}
        <Button>Verify OTP</Button>
      </form>
      {/* Resend OTP */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">
          Didn't receive the code?
          <a href="#" className="text-primary hover:underline">
            Resend OTP
          </a>
        </p>
      </div>
    </div>
  );
}
