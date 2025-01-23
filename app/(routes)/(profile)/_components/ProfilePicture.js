"use client";

import { useState } from "react";
import Image from "next/image";
import profilePic from "@/assets/avatar/avatar.png";
import uploadImage from "@/utils/uploadImage";
import { uploadPhoto } from "@/actions/uploadPhoto";
import CommonErrorMessage from "../../(auth)/_components/CommonErrorMessage";
import uploadImages from "@/actions/uploadImages";

export default function ProfilePicture({ avatar }) {
  const [preview, setPreview] = useState(avatar || profilePic);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  setTimeout(() => {
    if (success) {
      setSuccess(false);
    }
  }, 1500);
  const handleImageChange = async (event) => {
    setLoading(true);
    try {
      const file = event.target.files[0];

      if (file) {
        // Create a preview of the image
        const reader = new FileReader();
        reader.onloadend = async () => {
          setPreview(reader.result);
          const response = await uploadImages(reader?.result);
          if (response.ok) {
            const imageInsert = await uploadPhoto(response?.files[0]);
            if (imageInsert.ok) {
              setSuccess(imageInsert.message);
            } else {
              setError(response.message);
            }
          }
        };
        reader.readAsDataURL(file);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {success && <p className="px-4 text-green-600 mt-2">{success}</p>}
      {error && <CommonErrorMessage>{error}</CommonErrorMessage>}
      <div className="relative bottom-[-50px] left-8 w-[120px] h-[120px] rounded-full border-4 border-white shadow-lg">
        {/* Display Profile Picture */}
        <Image
          src={preview}
          alt="Profile Picture"
          width={120}
          height={120}
          className="rounded-full object-cover w-full h-full"
        />

        {/* Hidden File Input */}
        <input
          type="file"
          accept="image/*"
          id="profilePicInput"
          className="hidden"
          name="image"
          onChange={handleImageChange} // Handle change directly when image is selected
        />

        {/* Edit Icon */}
        <div
          className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer"
          title="Edit Profile Picture"
          onClick={() => document.getElementById("profilePicInput").click()} // Trigger file input click
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-pencil"
          >
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
            <path d="m15 5 4 4" />
          </svg>
        </div>

        {/* Loader Animation */}
        {loading && (
          <div className="absolute inset-0 bg-white/50 flex items-center justify-center rounded-full">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </>
  );
}
