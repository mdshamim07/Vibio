"use client";

import { logOutAction } from "@/actions";
import useMedia from "@/app/hooks/useMedia";

export default function LogOutButton() {
  const { media, setMedia } = useMedia();
  async function handleLogOut() {
    setMedia({
      ...media,
      navContent: false,
    });
    await logOutAction();
  }
  return (
    <button
      onClick={handleLogOut}
      className="flex w-full p-[2px] items-center gap-3 mt-2 hover:bg-[#e0e0e0]"
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
        className="lucide lucide-log-out"
      >
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1={21} x2={9} y1={12} y2={12} />
      </svg>
      Log Out
    </button>
  );
}
