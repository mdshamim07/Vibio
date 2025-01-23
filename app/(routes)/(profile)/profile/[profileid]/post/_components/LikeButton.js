"use client";

import { useState } from "react";
import { addNewLikeAction } from "@/actions/postActions";

export default function LikeButton({ postId, likeObject, postUserId }) {
  const [isLiked, setIsLiked] = useState(likeObject?.liked || false);
  const [totalLikes, setTotalLikes] = useState(likeObject?.totalLikes || 0);
  const [isLoading, setIsLoading] = useState(false);

  async function handleAddLike() {
    if (isLoading) return; // Prevent multiple clicks while processing

    setIsLoading(true);
    try {
      await addNewLikeAction(postId, postUserId);
      setIsLiked((prev) => !prev); // Toggle the like state
      setTotalLikes((prev) => (isLiked ? prev - 1 : prev + 1)); // Update the total likes count
    } catch (error) {
      console.error("Error while liking the post:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <button
      onClick={handleAddLike}
      disabled={isLoading} // Disable button during loading
      className={`px-2 py-1 justify-center w-[80px] rounded-sm hover:bg-[#e0e0e0] cursor-pointer flex items-center gap-1 ${
        isLiked ? "text-primary" : "text-black"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide lucide-thumbs-up ${
          isLiked ? "fill-primary stroke-primary" : "stroke-current fill-none"
        }`}
      >
        <path d="M7 10v12" />
        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
      </svg>
      {totalLikes > 0 ? totalLikes : "Like"}
    </button>
  );
}
