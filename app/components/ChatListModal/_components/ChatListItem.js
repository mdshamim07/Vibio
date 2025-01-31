"use client";

import { useEffect, useState } from "react";
import getChatFirstItem from "@/actions/getChatFirstItem";
import useMedia from "@/app/hooks/useMedia";
import profilePic from "@/assets/avatar/avatar.png";
import formateTime from "@/utils/formateTime";

export default function ChatListItem({ chatItem }) {
  const { media, setMedia } = useMedia();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [chat, setChat] = useState(null);

  // Set up the chatbox for the selected chat item
  function handleChatbox() {
    setMedia({
      ...media,
      chatboxInfo: {
        isActive: true,
        recipient: chatItem?._id,
      },
    });
  }

  // Fetch initial chat data and set up polling
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    // Function to fetch chat messages
    const fetchChats = async () => {
      try {
        const userChats = await getChatFirstItem(chatItem?._id);
        if (isMounted) {
          setChat(userChats);
        }
      } catch (error) {
        if (isMounted) {
          setError("Failed to fetch messages");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    // Fetch initial chats
    fetchChats();

    // Polling for new messages every 3 seconds (adjust as needed)
    const intervalId = setInterval(() => {
      fetchChats();
    }, 3000); // Fetch every 3 seconds

    // Cleanup interval on unmount
    return () => {
      clearInterval(intervalId);
      isMounted = false;
    };
  }, [chatItem?._id]);

  return (
    <div
      onClick={handleChatbox}
      className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
    >
      <div className="w-[50px] h-[50px]">
        <img
          width={50}
          height={50}
          className="w-full h-full rounded-full"
          src={chatItem?.avatar || profilePic}
          alt={`${chatItem?.firstName} ${chatItem?.lastName}`}
        />
      </div>

      <div className="w-[60%]">
        <p className="text-sm font-medium">
          {chatItem?.firstName} {chatItem?.lastName}
        </p>
        <span className="text-xs text-gray-500">
          {loading
            ? "Loading..."
            : chat && chat.text
            ? chat.text
            : "No messages"}
        </span>
      </div>

      {loading || (
        <span className="text-xs w-[30%] text-gray-400">
          {chat?.createdAt && formateTime(chat?.createdAt)}
        </span>
      )}

      {error && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white bg-opacity-50 flex justify-center items-center">
          <p className="text-red-600">{error}</p>
        </div>
      )}
    </div>
  );
}
