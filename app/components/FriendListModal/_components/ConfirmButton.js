"use client";

import { acceptReqAction } from "@/actions/addFriendAction";
import { useState } from "react";

import CommonErrorMessage from "@/app/(routes)/(auth)/_components/CommonErrorMessage";

export default function ConfirmButton({ id }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function handleConfirm() {
    setLoading(true);
    try {
      await acceptReqAction(id);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      {error && <CommonErrorMessage>{error}</CommonErrorMessage>}
      <button
        onClick={handleConfirm}
        disabled={loading}
        className={`variable-btn hover:!bg-hover text-white flex justify-center items-center gap-2 ${
          loading ? "bg-hover cursor-not-allowed" : "bg-primary"
        }`}
      >
        {loading && (
          <div
            className="w-[15px] h-[15px] border-2 border-white border-t-transparent rounded-full animate-spin"
            aria-label="Loading"
          ></div>
        )}
        {loading ? "Loading..." : "Confirm"}
      </button>
    </>
  );
}
