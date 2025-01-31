"use client";
import { useEffect, useRef, useState } from "react";
import OutGoingChatItem from "./OutGoingChatItem";
import useMedia from "@/app/hooks/useMedia";
import getChats from "@/actions/getChats";
import IncommingChatItem from "./IncommingChatItem";
import CommonErrorMessage from "@/app/(routes)/(auth)/_components/CommonErrorMessage";
import Image from "next/image";

export default function ChatMainBox({ userId }) {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { media } = useMedia();
  const chatBoxref = useRef(null);
  const recipientId = media?.chatboxInfo?.recipient;

  useEffect(() => {
    if (!recipientId) return;

    let isMounted = true;
    setLoading(true);

    // Function to fetch the chat messages
    const fetchChats = async () => {
      try {
        const userChats = await getChats(recipientId);
        if (isMounted) setChats(userChats);
      } catch (error) {
        setError(error.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    // Fetch initial chats
    fetchChats();

    // Polling for new messages every 5 seconds (adjust as needed)
    const intervalId = setInterval(() => {
      fetchChats();
    }, 3000); // Fetch every 3 seconds

    // Cleanup interval on unmount

    return () => {
      clearInterval(intervalId);
      isMounted = false;
    };
  }, [recipientId, userId]);
  useEffect(() => {
    // Scroll to the bottom when chats are fetched or updated
    if (chatBoxref.current) {
      chatBoxref.current.scrollTop = chatBoxref.current.scrollHeight;
    }
  }, [chats]);
  return (
    <div
      ref={chatBoxref}
      className="p-4 h-[350px] md:h-[400px] overflow-y-auto flex flex-col gap-3"
    >
      {loading ? (
        <div className="w-full flex justify-center items-center min-h-[300px]">
          <div className="w-[50px] h-[50px] border border-primary rounded-full loader"></div>
        </div>
      ) : chats.length === 0 ? (
        <h2 className="text-center text-gray-500 min-h-[300px] items-center flex justify-center ">
          No Messages Found
        </h2>
      ) : (
        chats.map((chat) =>
          chat.sender._id === userId ? (
            <OutGoingChatItem text={chat.text} key={chat._id} />
          ) : (
            <IncommingChatItem
              user={chat.sender}
              text={chat.text}
              key={chat._id}
            />
          )
        )
      )}
      {error && <CommonErrorMessage>{error}</CommonErrorMessage>}
    </div>
  );
}
