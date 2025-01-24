"use client";
import readNotificationAction from "@/actions/readNotificationAction";
import useMedia from "@/app/hooks/useMedia";
import Link from "next/link";

export default function NotificationItem({ children, contentRef, id }) {
  const { media, setMedia } = useMedia();
  async function handleReadNotification() {
    setMedia({
      ...media,
      notificationModal: false,
    });
    await readNotificationAction(id);
  }
  return (
    <Link
      onClick={handleReadNotification}
      href={`/feed/${contentRef}`}
      className="p-2 flex items-center gap-3 hover:bg-gray-100 cursor-pointer"
    >
      {children}
    </Link>
  );
}
