"use client";
import { useEffect, useState } from "react";

import OutGoingChatItem from "./OutGoingChatItem";
import useMedia from "@/app/hooks/useMedia";
import getChats from "@/actions/getChats";
import IncommingChatItem from "./IncommingChatItem";

export default function ChatMainBox({ userId }) {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(chats);

  const { media } = useMedia();

  useEffect(() => {
    const recipientId = media?.chatboxInfo?.recipient;
    if (!recipientId) return;

    let isMounted = true;
    setLoading(true);

    const fetchUser = async () => {
      try {
        const user = await getChats(recipientId);
        console.log("Fetched chats:", user); // Debug API response
        if (isMounted) {
          setChats(user);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchUser();

    return () => {
      isMounted = false;
    };
  }, [media?.chatboxInfo?.recipient]);

  return (
    <div className="p-4 h-[350px] md:h-[400px] overflow-y-auto flex flex-col gap-3">
      {loading ? (
        <div className="w-full flex justify-center items-center">
          <div className="w-[50px] h-[50px] border border-primary rounded-full loader"></div>
        </div>
      ) : (
        <>
          {chats.map((chat) => {
            console.log("Chat item:", chat); // Debug chat structure
            return chat?.sender?._id === userId ? (
              <OutGoingChatItem text={chat?.text} key={chat?._id} />
            ) : (
              <IncommingChatItem
                user={chat?.sender} // ✅ Changed from `chat?.receiver`
                text={chat?.text}
                key={chat?._id}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
