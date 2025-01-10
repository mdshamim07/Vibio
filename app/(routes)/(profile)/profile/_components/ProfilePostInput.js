"use client";

import useMedia from "@/app/hooks/useMedia";

export default function ProfilePostInput({ firstName }) {
  const { media, setMedia } = useMedia();
  return (
    <input
      onClick={() =>
        setMedia({
          ...media,
          postModal: true,
        })
      }
      type="text"
      placeholder={`What's on your mind, ${firstName}?`}
      className="w-full bg-gray-100 p-2 rounded-full focus:outline-none"
    />
  );
}
