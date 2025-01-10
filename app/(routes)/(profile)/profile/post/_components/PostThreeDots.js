"use client";

import useMedia from "@/app/hooks/useMedia";

export default function PostThreeDots({ postId, isModal, setIsModal }) {
  const { media, setMedia } = useMedia();

  return (
    <>
      {isModal && (
        <div className="custom-shaddow bg-bgColor absolute right-2 top-12 py-2">
          <ul>
            <li
              onClick={() => {
                setIsModal(!isModal);
                setMedia({
                  ...media,
                  postId: postId,
                  isAlert: true,
                });
              }}
              className="flex select-none items-center gap-2 hover:bg-[#e0e0e0] cursor-pointer rounded-sm w-full px-2"
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
                className="lucide lucide-trash"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              </svg>
              Delete Post
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
