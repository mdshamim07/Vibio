"use client";

import useMedia from "@/app/hooks/useMedia";

export default function NotificationModalContainer({ children }) {
  const { media } = useMedia();
  return <>{media?.notificationModal && children}</>;
}
