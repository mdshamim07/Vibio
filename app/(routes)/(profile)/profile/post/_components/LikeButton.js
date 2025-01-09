"use client";

import { addNewLikeAction } from "@/actions/postActions";

export default function LikeButton({ postId, likeObject }) {
  async function handleAddLike() {
    const response = await addNewLikeAction(postId);
  }
  return (
    <button
      onClick={handleAddLike}
      className={`px-2 py-1 justify-center w-[80px] rounded-sm hover:bg-[#e0e0e0] cursor-pointer flex items-center gap-1 ${likeObject?.liked ? "text-primary" : "text-black"}`}
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
          likeObject?.liked
            ? "fill-primary stroke-primary"
            : "stroke-current fill-none"
        }`}
      >
        <path d="M7 10v12" />
        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
      </svg>
      {likeObject?.totalLikes > 0 ? likeObject?.totalLikes : "Like"}
    </button>
  );
}
