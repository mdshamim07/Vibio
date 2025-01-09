"use client";

import useMedia from "@/app/hooks/useMedia";
import Image from "next/image";
import profilePic from "@/assets/avatar/avatar.png";
export default function WhatsMindInput({ avatar }) {
  const { media, setMedia } = useMedia();
  return (
    <div
      onClick={() =>
        setMedia({
          ...media,
          postModal: true,
          postThreeDot: false,
          notificationModal: false,
          friendListModal: false,
          chatListModal: false,
        })
      }
      className="justify-center flex gap-2 mt-4 shadow-xl mb-2 py-2 px-2 border"
    >
      <Image
        width={40}
        height={40}
        className="w-[40px] h-[40px] rounded-full object-cover"
        src={avatar ? avatar : profilePic}
        alt=""
      />
      <input
        type="text"
        placeholder="What's on your mind..."
        className="border bg-bgColor py-2 px-2 rounded-sm focus:border-black w-[90%] outline-none"
      />
    </div>
  );
}
