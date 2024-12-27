"use client";

import useMedia from "@/app/hooks/useMedia";

export default function NavContentModalContainer({ children }) {
  const { media } = useMedia();
  return <>{media?.navContent && children}</>;
}
