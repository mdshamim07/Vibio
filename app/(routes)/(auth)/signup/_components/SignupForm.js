"use client";
import InputField from "@/app/components/InputField";
import DateOfBirthOptions from "./DateOfBirthOptions";
import Gender from "./Gender";
import { useEffect, useState } from "react";
import CommonErrorMessage from "../../_components/CommonErrorMessage";
import { createUserAction } from "@/actions";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";
import LoadingLine from "@/app/components/LoadingLine";

export default function SignupForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  async function handleCreateUser(e) {
    e.preventDefault(); // Prevent default form submission
    setError(null); // Reset error state
    setLoading(true); // Start loading state

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      const requiredFields = [
        "firstName",
        "lastName",
        "dateOfBirth",
        "gender",
        "email",
        "password",
      ];
      const missingFields = requiredFields.filter((field) => !data[field]);

      if (missingFields.length > 0) {
        setError("All fields are required!");
        return; // Stop execution if validation fails
      }

      const response = await createUserAction(data);

      if (response.ok) {
        router.push(`/verify?user=${response?.data?.id}`);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Reset loading state
    }
  }

  useEffect(() => {
    if (error) {
      window.scrollTo(0, 0); // Scroll to the top if there's an error
    }
  }, [error]);

  return (
    <form onSubmit={handleCreateUser}>
      {loading && <LoadingLine />}
      <div className={`${loading ? "opacity-50" : "opacity-100"}`}>
        {error && <CommonErrorMessage>{error}</CommonErrorMessage>}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <InputField
            isDisabled={loading ? true : false}
            label="First Name"
            placeholder="First Name"
            type="text"
            error={false}
            name="firstName"
          />
          <InputField
            isDisabled={loading ? true : false}
            label="Last Name"
            placeholder="Last Name"
            type="text"
            error={false}
            name="lastName"
          />
        </div>

        <DateOfBirthOptions />
        <Gender />
        <div className="mb-4">
          <InputField
            isDisabled={loading ? true : false}
            label="Email address"
            placeholder="Email address"
            type="email"
            error={false}
            name="email"
          />
        </div>
        <div className="mb-4">
          <InputField
            isDisabled={loading ? true : false}
            label="New Password"
            placeholder="New Password"
            type="password"
            error={false}
            name="password"
            mode="password"
          />
        </div>

        <Button loading={loading} type="submit">
          Sign Up
        </Button>
      </div>
    </form>
  );
}
