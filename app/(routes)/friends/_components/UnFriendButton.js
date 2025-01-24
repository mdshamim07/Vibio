"use client";

import { unFriend } from "@/actions/unFriend";
import { useState } from "react";

export default function UnFriendButton({ userId }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  async function handleUnfriend() {
    setLoading(true);
    try {
      await unFriend(userId);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <button
      onClick={handleUnfriend}
      className="variable-btn rounded-sm hover:bg-[#d6d9dd] border flex justify-center items-center gap-2 bg-secondaryBg w-full"
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
        className="lucide lucide-user-minus"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx={9} cy={7} r={4} />
        <line x1={22} x2={16} y1={11} y2={11} />
      </svg>

      {loading ? (
        <div className="flex items-center gap-2">
          <div
            className="w-[15px] h-[15px] border-2 border-primary border-t-transparent rounded-full animate-spin"
            aria-label="Loading"
          ></div>
          <p>Please Wait...</p>
        </div>
      ) : (
        "Unfriend"
      )}
    </button>
  );
}
