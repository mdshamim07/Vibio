"use client";
import useMedia from "@/app/hooks/useMedia";

export default function StoryModalContainer({ children }) {
  const { media } = useMedia();
  return <>{media?.storyModal && children}</>;
}
