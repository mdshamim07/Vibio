"use client";

import useMedia from "@/app/hooks/useMedia";

export default function ShareButton() {
  const { media, setMedia } = useMedia();
  return (
    <button
      onClick={() => {
        setMedia({
          ...media,
          shareModal: true,
        });
      }}
      className="px-2 py-1 w-[100px] justify-center rounded-sm hover:bg-[#e0e0e0] cursor-pointer flex items-center gap-1"
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
        className="lucide lucide-share-2"
      >
        <circle cx={18} cy={5} r={3} />
        <circle cx={6} cy={12} r={3} />
        <circle cx={18} cy={19} r={3} />
        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
      </svg>
      Share
    </button>
  );
}
