"use client";

import useMedia from "@/app/hooks/useMedia";

export default function CreatePostButton() {
  const { media, setMedia } = useMedia();
  return (
    <button
      className="btn mt-2"
      onClick={() =>
        setMedia({
          ...media,
          postModal: true,
        })
      }
    >
      Create New Post
    </button>
  );
}
