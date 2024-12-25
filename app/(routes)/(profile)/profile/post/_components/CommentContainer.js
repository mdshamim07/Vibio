"use client";

import useMedia from "@/app/hooks/useMedia";

export default function CommentContainer({ children }) {
  const { media } = useMedia();
  return (
    <div
      className={`justify-center transition-all duration-150 flex gap-2 ${
        media?.commentSection
          ? "mt-4 visible opacity-100"
          : "opacity-0 invisible mt-[-20px]"
      }`}
    >
      {children}
    </div>
  );
}
