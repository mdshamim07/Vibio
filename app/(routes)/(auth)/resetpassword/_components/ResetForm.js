"use client";
import Button from "@/app/components/Button";
import InputField from "@/app/components/InputField";
import { useState } from "react";
import VerifyInputs from "../../verify/_components/VerifyInputs";
import CommonErrorMessage from "../../_components/CommonErrorMessage";
import sendResetLinkAction from "@/actions/sendResetLinkAction";
import LoadingLine from "@/app/components/LoadingLine";
import getFormData from "@/utils/getFormData";
import { updatePassword, verifyResetFormOtp } from "@/actions";
import { useRouter } from "next/navigation";

export default function ResetForm() {
  const [resetState, setResetState] = useState({
    resetPageTitle: "Forgot Password",
    resetPageDescription:
      "Enter your email address to reset your password. You’ll receive a link to create a new one.",
    field: "email",
  });
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handler for send otp
  async function handleGetOtp(e) {
    setLoading(true);
    e.preventDefault();
    setError(null);
    try {
      const emailField = e.target.email?.value;
      if (!emailField) {
        setError("Email is required!");
      } else {
        const response = await sendResetLinkAction(emailField.trim());
        setEmail(emailField.trim());
        if (response.ok) {
          setResetState({
            ...resetState,
            field: "otp",
            resetPageTitle: "Verify Your OTP",
            resetPageDescription:
              "Enter the 6-digit code we sent to your email or phone number.",
          });
        } else {
          setError(response.message);
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  //   handle get otp s
  async function handleVerifyOtp(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const otp = getFormData(e);
      const response = await verifyResetFormOtp(email, otp?.otpField);
      if (response.ok) {
        setResetState({
          ...resetState,
          field: "newpassword",
          resetPageTitle: "Create New Password",
          resetPageDescription:
            "Enter a new password to regain access to your account.",
        });
      } else {
        setError(response?.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  // handle change password
  async function handleChangePassword(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const passwordField = e.target.password?.value;
      if (passwordField.length < 6) {
        setError("Password field must be 6 character!");
      } else {
        const response = await updatePassword(email, passwordField.trim());
        if (response.ok) {
          router.push("/");
        } else {
          setError(response?.message);
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }

    // Mock API response
  }

  const renderFormContent = () => {
    switch (resetState.field) {
      case "email":
        return (
          <InputField
            isDisabled={loading ? true : false}
            customClass={`${loading ? "opacity-50" : "opacity-100"}`}
            placeholder="Enter your email address"
            name="email"
            error={error ? true : false}
          />
        );
      case "otp":
        return (
          <VerifyInputs loading={loading} error={error} setError={setError} />
        );
      case "newpassword":
        return (
          <InputField
            placeholder="Enter your new password"
            name="password"
            type="password"
            mode="password"
            customClass={`${loading ? "opacity-50" : "opacity-100"}`}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {resetState.field !== "email" && (
        <button
          onClick={() => {
            if (resetState.field === "otp") {
              setResetState({
                ...resetState,
                field: "email",
                resetPageTitle: "Forgot Password",
                resetPageDescription:
                  "Enter your email address to reset your password. You’ll receive a otp create a new one.",
              });
            } else if (resetState.field === "newpassword") {
              setResetState({
                ...resetState,
                field: "otp",
                resetPageTitle: "Verify Your OTP",
                resetPageDescription:
                  "Enter the 6-digit code we sent to your email or phone number.",
              });
            }
          }}
          className="absolute left-4 top-4 w-[40px] h-[40px] rounded-full bg-secondaryBg flex justify-center items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-move-left"
          >
            <path d="M6 8L2 12L6 16" />
            <path d="M2 12H22" />
          </svg>
        </button>
      )}

      <h1 className="text-2xl font-bold text-center mb-4">
        {resetState.resetPageTitle}
      </h1>
      <p className="text-center text-gray-600 mb-6">
        {resetState.resetPageDescription}
      </p>
      {loading && <LoadingLine />}
      <form
        onSubmit={
          resetState.field === "email"
            ? handleGetOtp
            : resetState.field === "otp"
            ? handleVerifyOtp
            : handleChangePassword
        }
      >
        <div className="mb-4">{renderFormContent()}</div>
        {error && <CommonErrorMessage>{error}</CommonErrorMessage>}
        <Button loading={loading}>
          {resetState.field === "email"
            ? "Send Reset OTP"
            : resetState.field === "otp"
            ? "Verify"
            : "Change Password"}
        </Button>
      </form>
    </>
  );
}
