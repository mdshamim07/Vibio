"use client";

import useMedia from "@/app/hooks/useMedia";

export default function FriendListModalContainer({ children }) {
  const { media } = useMedia();
  return <>{media?.friendListModal && children}</>;
}
