"use client";

import getUserByIdAction from "@/actions/getUserByIdAction";
import useMedia from "@/app/hooks/useMedia";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ChatBoxHeader() {
  const { media, setMedia } = useMedia();
  const [chatUser, setChatUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const recipientId = media?.chatboxInfo?.recipient;
    if (!recipientId) return; // Prevents unnecessary fetch calls

    let isMounted = true;
    setLoading(true);

    const fetchUser = async () => {
      try {
        const user = await getUserByIdAction(recipientId);
        if (isMounted) {
          setChatUser(user);
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
    <>
      {loading ? (
        <div className="flex gap-2 items-center border-b p-4 bg-gray-50 rounded-t-lg justify-between animate-pulse">
          <div className="flex items-center gap-2">
            {/* Profile Image Skeleton */}
            <div className="w-[50px] h-[50px] rounded-full bg-gray-300"></div>

            <div>
              {/* Name Skeleton */}
              <div className="w-32 h-4 bg-gray-300 rounded mb-2"></div>
              {/* Status Skeleton */}
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </div>
          </div>

          {/* Close Button Skeleton */}
          <div className="w-5 h-5 bg-gray-300 rounded"></div>
        </div>
      ) : (
        <div className="flex gap-2 items-center border-b p-4 bg-gray-50 rounded-t-lg justify-between">
          <div className="flex items-center gap-2">
            <div className="w-[50px] h-[50px] rounded-full bg-[#e0e0e0] flex justify-center items-center">
              {chatUser?.avatar ? (
                <Image
                  src={chatUser?.avatar}
                  width={50}
                  height={50}
                  alt="profile pic"
                  className="object-cover w-full h-full rounded-full"
                />
              ) : (
                chatUser?.firstName.charAt(0)
              )}
            </div>
            <div>
              <h2>
                {chatUser?.firstName} {chatUser?.lastName}
              </h2>
              <p className="flex items-center gap-2 text-sm text-gray-500">
                Active Now
                <span className="w-[10px] h-[10px] rounded-full bg-primary inline-block" />
              </p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            onClick={() =>
              setMedia({
                ...media,
                chatboxInfo: {
                  isActive: false,
                  recipient: "",
                },
              })
            }
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
      )}
    </>
  );
}
