"use client";

import useMedia from "@/app/hooks/useMedia";

export default function ShareModalContainer({ children }) {
  const { media } = useMedia();
  return <>{media?.shareModal && children}</>;
}
