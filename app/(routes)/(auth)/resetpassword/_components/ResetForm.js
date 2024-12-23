"use client";
import Button from "@/app/components/Button";
import InputField from "@/app/components/InputField";
import { useState } from "react";
import VerifyInputs from "../../verify/_components/VerifyInputs";
import CommonErrorMessage from "../../_components/CommonErrorMessage";

export default function ResetForm() {
  const [resetState, setResetState] = useState({
    resetPageTitle: "Forgot Password",
    resetPageDescription:
      "Enter your email address to reset your password. You’ll receive a link to create a new one.",
    field: "email",
  });
  const [error, setError] = useState(null);
  const handleGetOtp = (e) => {
    e.preventDefault();

    const emailField = e.target.email?.value;
    if (!emailField) {
      alert("Please enter a valid email address.");
      return;
    }

    // Mock API response
    const response = { ok: true };

    if (response.ok) {
      setResetState({
        ...resetState,
        field: "otp",
        resetPageTitle: "Verify Your OTP",
        resetPageDescription:
          "Enter the 6-digit code we sent to your email or phone number.",
      });
    }
  };
//   handle get otp s
  const handleCreateNewPassword = (e) => {
    e.preventDefault();
    const otp1 = e.target.otp1.value;
    const otp2 = e.target.otp2.value;
    const otp3 = e.target.otp3.value;
    const otp4 = e.target.otp4.value;
    const otp5 = e.target.otp5.value;
    const otp6 = e.target.otp6.value;
    const otp = `${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`;
    // Mock API response
    const response = { ok: false, message: "Enter Your Six character otp" };

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
  };
  // handle change password
  const handleChangePassword = (e) => {
    e.preventDefault();

    const passwordField = e.target.password?.value;
    if (!passwordField || passwordField.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    // Mock API response
    const response = { ok: true };

    if (response.ok) {
      alert("Your password has been successfully changed.");
      setResetState({
        resetPageTitle: "Forgot Password",
        resetPageDescription:
          "Enter your email address to reset your password. You’ll receive a link to create a new one.",
        field: "email",
      });
    } else {
      setError(response?.message);
    }
  };

  const renderFormContent = () => {
    switch (resetState.field) {
      case "email":
        return (
          <InputField
            placeholder="Enter your email or phone number"
            name="email"
          />
        );
      case "otp":
        return <VerifyInputs />;
      case "newpassword":
        return (
          <InputField
            placeholder="Enter your new password"
            name="password"
            type="password"
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
                  "Enter your email address to reset your password. You’ll receive a link to create a new one.",
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

      <form
        onSubmit={
          resetState.field === "email"
            ? handleGetOtp
            : resetState.field === "otp"
            ? handleCreateNewPassword
            : handleChangePassword
        }
      >
        <div className="mb-4">{renderFormContent()}</div>
        {error && <CommonErrorMessage>{error}</CommonErrorMessage>}
        <Button>
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
