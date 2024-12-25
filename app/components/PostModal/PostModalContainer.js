"use client";
import useMedia from "@/app/hooks/useMedia";

export default function PostModalContainer({ children }) {
  const { media } = useMedia();
  return <>{media?.postModal && children}</>;
}
