"use client";

import { addComment } from "@/actions/commentAction";
import CommonErrorMessage from "@/app/(routes)/(auth)/_components/CommonErrorMessage";
import useMedia from "@/app/hooks/useMedia";
import getFormData from "@/utils/getFormData";
import { useState } from "react";

export default function CommentContainer({ children, postId }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { media } = useMedia();
  async function handleAddComment(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = getFormData(e);
      const response = await addComment(formData, postId);
      if (response.ok) {
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <form
      onSubmit={handleAddComment}
      className={`justify-between transition-all duration-150 flex gap-1 ${
        media?.commentSection
          ? "mt-4 visible opacity-100"
          : "opacity-0 invisible mt-[-20px]"
      }`}
    >
      {error && <CommonErrorMessage>{error}</CommonErrorMessage>}
      {children}
      <button
        className={`btn w-[20%] ${
          loading ? "disabled:opacity-50" : "hover:bg-hover"
        }`}
        disabled={loading}
      >
        {loading ? "Adding..." : "Comment"}
      </button>
    </form>
  );
}
