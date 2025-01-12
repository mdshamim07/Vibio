"use client";

import { useCommentContext } from "@/app/providers/CommentProvider";

export default function CommentButton({ comments, postId }) {
  const { toggleCommentSection } = useCommentContext();
  return (
    <button
      onClick={() => toggleCommentSection(postId)}
      className="px-2 py-1 w-[120px] justify-center rounded-sm hover:bg-[#e0e0e0] cursor-pointer flex items-center gap-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-message-square"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      {comments > 0 ? comments : "Comment"}
    </button>
  );
}
