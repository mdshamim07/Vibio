"use client";

import useMedia from "@/app/hooks/useMedia";

export default function ThreeDots() {
  const { media, setMedia } = useMedia();
  return (
    <svg
      onClick={() => {
        setMedia({
          ...media,
          postThreeDot: !media?.postThreeDot,
        });
      }}
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="select-none cursor-pointer lucide lucide-ellipsis-vertical"
    >
      <circle cx={12} cy={12} r={1} />
      <circle cx={12} cy={5} r={1} />
      <circle cx={12} cy={19} r={1} />
    </svg>
  );
}
