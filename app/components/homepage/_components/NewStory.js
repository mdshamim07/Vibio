"use client";

import useMedia from "@/app/hooks/useMedia";

export default function NewStory({ children }) {
  const { media, setMedia } = useMedia();
  return (
    <div
      onClick={() =>
        setMedia({
          ...media,
          storyModal: !media?.storyModal,
        })
      }
      className="select-none cursor-pointer relative w-[150px] h-[250px] border rounded-lg overflow-hidden shadow-lg flex-shrink-0 bg-white"
    >
      {/* Background Image */}
      {children}
    </div>
  );
}
