"use client";

import useMedia from "../hooks/useMedia";

export default function FriendListModalButton({ totalFriendRequests }) {
  const { media, setMedia } = useMedia();
  return (
    <button
      className="relative cursor-pointer"
      onClick={() => {
        setMedia({
          ...media,
          notificationModal: false,
          friendListModal: !media?.friendListModal,
          chatListModal: false,
        });
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-user-plus"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx={9} cy={7} r={4} />
        <line x1={19} x2={19} y1={8} y2={14} />
        <line x1={22} x2={16} y1={11} y2={11} />
      </svg>
      <span className="w-[20px] justify-center items-center text-xs absolute top-[-12px] text-white right-[-10px] flex h-[20px] rounded-full bg-primary">
        {totalFriendRequests}
      </span>
    </button>
  );
}
