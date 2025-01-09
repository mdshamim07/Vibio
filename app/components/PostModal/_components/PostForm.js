"use client";

import useMedia from "@/app/hooks/useMedia";
import getFormData from "@/utils/getFormData";
import { useState } from "react";
import Button from "../../Button";
import { createNewPost } from "@/actions/postActions";
import { useRouter } from "next/navigation";
import CommonErrorMessage from "@/app/(routes)/(auth)/_components/CommonErrorMessage";

export default function PostForm({ children }) {
  const { media, setMedia } = useMedia();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function handleAddPost(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = getFormData(e);

      const newPost = {
        htmlContent: media?.postModalContent,
        audience: formData?.audience,
      };

      const response = await createNewPost(newPost);
      if (response.ok) {
        setMedia({
          ...media,
          postModal: false,
        });
        router.push(`/feed/${response?.id}`);
      } else {
        setError(response?.message);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <form
      onSubmit={handleAddPost}
      className="bg-white rounded-lg w-[90%] h-[80vh] sm:w-[500px] flex flex-col"
    >
      {error && <CommonErrorMessage>{error}</CommonErrorMessage>}
      {children}
      <div className="border-t p-4 bg-white sticky bottom-0 flex justify-end">
        <Button loading={loading}>Post</Button>
      </div>
    </form>
  );
}
