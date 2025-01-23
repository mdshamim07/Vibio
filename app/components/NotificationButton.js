"use client";

import useMedia from "../hooks/useMedia";

export default function NotificationButton({ totalNotification }) {
  const { media, setMedia } = useMedia();
  return (
    <button
      className="relative cursor-pointer select-none"
      onClick={() => {
        setMedia({
          ...media,
          friendListModal: false,
          notificationModal: !media?.notificationModal,
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
        className="lucide lucide-bell"
      >
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
      <span className="w-[20px] justify-center items-center text-xs absolute top-[-12px] text-white right-[-10px] flex h-[20px] rounded-full bg-primary">
        {totalNotification}
      </span>
    </button>
  );
}
