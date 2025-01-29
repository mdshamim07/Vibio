"use client";

import useMedia from "@/app/hooks/useMedia";

export default function ChatBoxModalContainer({ children }) {
  const { media, setMedia } = useMedia();
  return <>{media?.chatboxInfo?.isActive && children}</>;
}
