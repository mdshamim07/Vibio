"use client";

import { createNewChatAction } from "@/actions/createNewChat";
import useMedia from "@/app/hooks/useMedia";
import { useState } from "react";

export default function ChatInputArea() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { media, setMedia } = useMedia();
  async function createChat(e) {
    e.preventDefault();
    const chatInput = e.target.chatInput.value.trim();
    setLoading(true);
    try {
      await createNewChatAction(media?.chatboxInfo?.recipient, chatInput);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <form
      onSubmit={createChat}
      className="border-t py-2 px-4 flex items-center gap-2"
    >
      {/* File Upload Icon */}
      <label htmlFor="file-upload" className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-paperclip"
        >
          <path d="M13.234 20.252 21 12.3" />
          <path d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486" />
        </svg>
        <input type="file" id="file-upload" className="hidden" />
      </label>
      {/* Input Field */}
      <input
        name="chatInput"
        type="text"
        placeholder="Type your message..."
        className="w-full py-2 px-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {/* Send Button */}
      <button
        disabled={loading}
        className={`${
          loading ? "bg-hover" : "bg-primary hover:bg-hover"
        } text-white py-2 px-4 rounded-full`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-send"
        >
          <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
          <path d="m21.854 2.147-10.94 10.939" />
        </svg>
      </button>
    </form>
  );
}
