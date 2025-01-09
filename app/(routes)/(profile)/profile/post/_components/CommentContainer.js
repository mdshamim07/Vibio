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
  const [comment, setComment] = useState("");
  async function handleAddComment(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = getFormData(e);
      const response = await addComment(formData, postId);
      if (response.ok) {
        setError(null);
        setComment("");
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
          : "opacity-0 invisible mt-[-40px]"
      }`}
    >
      {error && <CommonErrorMessage>{error}</CommonErrorMessage>}
      {children}
      <input
        onChange={(e) => setComment(e.target.value)}
        type="text"
        value={comment}
        name="title"
        placeholder="Write a comment..."
        disabled={loading}
        className={`bg-bgColor ${
          loading ? "opacity-50" : "opacity-100"
        } py-2 px-2 rounded-sm focus:border-black w-[70%] border outline-none`}
      />
      <button
        className={`btn flex justify-center items-center gap-1 w-[20%] ${
          loading || comment.length === 0
            ? "disabled:opacity-50"
            : "hover:bg-hover"
        }`}
        disabled={loading || comment?.length === 0}
      >
        {loading && (
          <div
            className="w-[15px] h-[15px] border-2 border-white border-t-transparent rounded-full animate-spin"
            aria-label="Loading"
          ></div>
        )}
        {loading ? "Adding..." : "Comment"}
      </button>
    </form>
  );
}
