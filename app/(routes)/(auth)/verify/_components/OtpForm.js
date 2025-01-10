"use client";

import { verifyOtp } from "@/actions";
import Button from "@/app/components/Button";
import getFormData from "@/utils/getFormData";
import { useState } from "react";
import CommonErrorMessage from "../../_components/CommonErrorMessage";
import { useRouter } from "next/navigation";

export default function OtpForm({ children, userId }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function handleVerifyOtp(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const formData = getFormData(e);
      const otpField = formData?.otpField;
      const response = await verifyOtp(userId, otpField);
      if (response.ok === "validuser" || response.ok) {
        router.push("/uploadavatar");
      }

      if (!response.ok) {
        setError(response?.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <form onSubmit={handleVerifyOtp}>
      {error && <CommonErrorMessage>{error}</CommonErrorMessage>}
      <div className={`${loading ? "opacity-50" : "opacity-100"}`}>
        {children}
      </div>
      <Button loading={loading}>Verify OTP</Button>
    </form>
  );
}
