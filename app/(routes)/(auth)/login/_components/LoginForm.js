"use client";

import loginAction from "@/actions/loginAction";
import getFormData from "@/utils/getFormData";
import { useState } from "react";
import CommonErrorMessage from "../../_components/CommonErrorMessage";
import Button from "@/app/components/Button";
import InputField from "@/app/components/InputField";
import { useRouter } from "next/navigation";
import LoadingLine from "@/app/components/LoadingLine";

export default function LoginForm({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const formData = getFormData(e);
      const result = await loginAction(formData);
      if (result.ok) {
        setError(null);
        router.push("/");
      } else {
        setError(result?.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <form onSubmit={handleLogin}>
      {error && <CommonErrorMessage>{error}</CommonErrorMessage>}
      {loading && <LoadingLine />}
      <div className={`mb-4 ${loading ? "opacity-50" : "opacity-100"}`}>
        <InputField
          label="Email adress"
          placeholder="Email address"
          type="email"
          error={false}
          name="email"
          isDisabled={loading ? true : false}
        />
      </div>
      <div className={`mb-4 ${loading ? "opacity-50" : "opacity-100"}`}>
        {" "}
        <InputField
          label="Password"
          placeholder="Password"
          type="password"
          error={false}
          name="password"
          isDisabled={loading ? true : false}
        />
      </div>

      <Button loading={loading}>Login</Button>
    </form>
  );
}
