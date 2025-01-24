"use client";
import { getChatList } from "@/actions/chatActions";
import CloseModalButton from "../NotificationModal/CloseModalButton";
import ChatListItem from "./_components/ChatListItem";
import { useEffect, useState } from "react";
import LoadingChat from "./LoadingChat";

export default function ChatListModal() {
  const [loading, setLoading] = useState(true); // Start loading initially
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true; // to prevent setting state on an unmounted component

    const fetchChatLists = async () => {
      try {
        const response = await getChatList();
        if (isMounted) {
          setData(response); // Set data directly without spreading old data
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "An error occurred while fetching chats.");
        }
      } finally {
        if (isMounted) {
          setLoading(false); // Stop loading once the fetch is done
        }
      }
    };

    fetchChatLists();

    return () => {
      isMounted = false; // Clean up to prevent state updates on unmounted component
    };
  }, []);

  return (
    <div id="modal">
      <div className="bg-white fixed right-2 top-16 rounded-lg w-[95%] sm:w-[400px] z-50">
        <div className="bg-white shadow-lg rounded-lg">
          {/* Chat Modal Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-semibold text-lg">Chats</h2>
            <CloseModalButton mode="chatList" />
          </div>
          {/* Chat Modal Body */}
          <div className="p-4 h-[500px] overflow-y-auto">
            <div className="space-y-4">
              {/* Loading or Error */}
              {loading ? (
                <LoadingChat data={data} />
              ) : error ? (
                <div className="text-red-500">{error}</div>
              ) : data.length > 0 ? (
                data.map((chatItem) => (
                  <ChatListItem key={chatItem._id} chatItem={chatItem} />
                ))
              ) : (
                <h2>No Friends found to chat</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
