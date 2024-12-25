"use client";

import useMedia from "../hooks/useMedia";

export default function ChatListModalButton() {
  const { media, setMedia } = useMedia();
  return (
    <button
      onClick={() =>
        setMedia({
          ...media,
          notificationModal: false,
          friendListModal: false,
          chatListModal: !media?.chatListModal,
        })
      }
      className="relative cursor-pointer"
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
        className="lucide lucide-message-square"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      <span className="w-[20px] justify-center items-center text-xs absolute top-[-12px] text-white right-[-10px] flex h-[20px] rounded-full bg-primary">
        1k
      </span>
    </button>
  );
}
