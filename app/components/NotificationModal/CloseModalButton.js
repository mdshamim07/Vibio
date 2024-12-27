"use client";

import useMedia from "@/app/hooks/useMedia";

export default function CloseModalButton({ mode }) {
  const { media, setMedia } = useMedia();
  function handleCloseModal() {
    if (mode === "notification") {
      setMedia({
        ...media,
        notificationModal: false,
      });
    } else if (mode === "friendList") {
      setMedia({
        ...media,
        friendListModal: false,
      });
    } else if (mode === "chatList") {
      setMedia({
        ...media,
        chatListModal: false,
      });
    } else if (mode === "postModal") {
      setMedia({
        ...media,
        postModal: false,
      });
    } else if (mode === "shareModal") {
      setMedia({
        ...media,
        shareModal: false,
      });
    } else if (mode === "storyModal") {
      setMedia({
        ...media,
        storyModal: false,
      });
    }
  }
  return (
    <button
      onClick={handleCloseModal}
      className="text-gray-500 text-2xl hover:text-gray-800"
    >
      ×
    </button>
  );
}
