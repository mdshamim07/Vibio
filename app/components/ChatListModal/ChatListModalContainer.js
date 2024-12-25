"use client";

import useMedia from "@/app/hooks/useMedia";

export default function ChatListModalContainer({ children }) {
  const { media, setMedia } = useMedia();
  return <>{media?.chatListModal && children}</>;
}