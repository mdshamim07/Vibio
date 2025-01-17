"use client";

import useMedia from "@/app/hooks/useMedia";
import getFormData from "@/utils/getFormData";
import { useState } from "react";
import Button from "../../Button";
import { createNewPost } from "@/actions/postActions";
import { useRouter } from "next/navigation";
import CommonErrorMessage from "@/app/(routes)/(auth)/_components/CommonErrorMessage";
import Image from "next/image";

export default function PostForm({ children }) {
  const [images, setImages] = useState([]);
  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(file); // Start reading the file as a data URL
    } else {
      console.log("No file selected or something went wrong");
    }
  }
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
        images,
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
      <div className="border rounded-md p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Add Photos</h3>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {/* Upload Button */}

          {images.length < 4 && (
            <div className="w-[80px] h-[80px] bg-gray-100 border rounded-md flex justify-center items-center">
              <label
                htmlFor="photo-upload"
                className="cursor-pointer text-gray-500 text-4xl"
              >
                +
              </label>
              <input
                name="post-image"
                type="file"
                onChange={handleImageChange}
                id="photo-upload"
                className="hidden"
              />
            </div>
          )}

          {/* Render Images */}
          {images.map((img, index) => (
            <div
              key={index}
              className="w-[80px] h-[80px] bg-gray-100 border rounded-md flex justify-center items-center overflow-hidden"
            >
              <Image
                className="w-full h-full object-cover"
                width={80}
                height={80}
                src={img}
                alt={`Uploaded photo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="border-t p-4 bg-white sticky bottom-0 flex justify-end">
        <Button loading={loading}>Post</Button>
      </div>
    </form>
  );
}
