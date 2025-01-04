"use client";

import { addFriendAction, cancelFriendAction } from "@/actions/addFriendAction";
import { useState } from "react";

export default function AddFriendButton({ id, isFriend, mode }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleAddFriend() {
    setLoading(true);
    try {
      const response = await addFriendAction(id);
      if (!response.ok) {
        setError(response.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  async function handleCancelFriend() {
    setLoading(true);
    try {
      const response = await cancelFriendAction(id);
      if (!response.ok) {
        setError(err);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <button
      className="variable-btn rounded-sm hover:bg-[#d6d9dd] border flex justify-center items-center gap-2 bg-secondaryBg w-full"
      onClick={isFriend ? handleCancelFriend : handleAddFriend}
    >
      <>
        {loading ? (
          <div className="flex items-center gap-2">
            <div
              className="w-[15px] h-[15px] border-2 border-primary border-t-transparent rounded-full animate-spin"
              aria-label="Loading"
            ></div>
            <p>Please Wait...</p>
          </div>
        ) : (
          <>
            {mode === "request-item" ? (
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
                className="lucide lucide-user-check"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx={9} cy={7} r={4} />
                <polyline points="16 11 18 13 22 9" />
              </svg>
            ) : isFriend ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user-minus"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx={9} cy={7} r={4} />
                <line x1={22} x2={16} y1={11} y2={11} />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user-plus"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx={9} cy={7} r={4} />
                <line x1={19} x2={19} y1={8} y2={14} />
                <line x1={22} x2={16} y1={11} y2={11} />
              </svg>
            )}
            {error && error}
            {mode === "request-item"
              ? "Confirm"
              : isFriend
              ? "Cancel"
              : "  Add Friend"}
          </>
        )}
      </>
    </button>
  );
}
