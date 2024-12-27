"use client";

import useMedia from "@/app/hooks/useMedia";
import { useRouter } from "next/navigation";

export default function PhotoStoryCard() {
  const { media, setMedia } = useMedia();
  const router = useRouter();
  return (
    <div
      onClick={() => {
        setMedia({
          ...media,
          storyModal: false,
        });
        router.push("/createstory");
      }}
      className="w-[200px] h-[300px] rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-300 flex flex-col items-center justify-center cursor-pointer transform hover:scale-105 transition-all"
    >
      {/* Icon */}
      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5h18M3 5a2 2 0 012-2h14a2 2 0 012 2M3 5v14a2 2 0 002 2h14a2 2 0 002-2V5M9 14l2-2m0 0l2 2m-2-2v6"
          />
        </svg>
      </div>
      {/* Text */}
      <p className="text-white font-semibold text-center">
        Create a Photo Story
      </p>
    </div>
  );
}
