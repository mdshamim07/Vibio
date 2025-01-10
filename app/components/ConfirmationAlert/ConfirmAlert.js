"use client";

import { deletePostAction } from "@/actions/postActions";
import CommonErrorMessage from "@/app/(routes)/(auth)/_components/CommonErrorMessage";
import useMedia from "@/app/hooks/useMedia";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ConfirmAlert({ children }) {
  const { media, setMedia } = useMedia();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function handleDeletePost() {
    setLoading(true);
    setError(null);
    try {
      const response = await deletePostAction(media?.postId);
      if (response.ok) {
        setError(null);
        setMedia({
          ...media,
          postId: "",
          isAlert: false,
        });
        router.push("/");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      {media.isAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            {error && <CommonErrorMessage>{error}</CommonErrorMessage>}
            {children}
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleDeletePost}
                disabled={loading}
                className={`px-4 py-2 bg-red-600 text-white rounded-lg focus:outline-none focus:ring-2  ${
                  loading
                    ? "disabled:opacity-50"
                    : "focus:ring-red-500 hover:bg-red-700 "
                }`}
              >
                {loading ? "Deleting..." : " Confirm"}
              </button>
              <button
                onClick={() => {
                  setMedia({
                    ...media,
                    postId: "",
                    isAlert: false,
                  });
                }}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
