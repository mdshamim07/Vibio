"use client";
import { uploadPhoto } from "@/actions/uploadPhoto";
import Button from "@/app/components/Button";
import blankAvatar from "@/assets/avatar/avatar.png";
import uploadImage from "@/utils/uploadImage";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CommonErrorMessage from "../../_components/CommonErrorMessage";
import uploadImages from "@/actions/uploadImages";

export default function AvatarPreview({ avatar }) {
  const [image, setImage] = useState(avatar || blankAvatar);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Handle file input changes and preview the selected image
  async function handleChangeAvatar(e) {
    const file = e.target.files?.[0]; // Use 'e' instead of 'event'
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image for live preview
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  }

  // Handle uploading the selected image
  async function handleUploadImage(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const uploadAvatar = await uploadImages(image);

      if (uploadAvatar.ok) {
        const imageInsert = await uploadPhoto(uploadAvatar?.files[0]);
        if (imageInsert.ok) {
          router.push(`/profile/${imageInsert?.id}`);
        } else {
          setError("Failed to save the image on the server");
        }
      } else {
        setError("Failed to upload the image");
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleUploadImage}>
      {error && <CommonErrorMessage>{error}</CommonErrorMessage>}
      <div className="relative w-32 h-32 rounded-full border border-gray-300 overflow-hidden">
        <Image
          width={128}
          height={128}
          id="photoPreview"
          src={image}
          alt="Profile Photo Preview"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Upload Button */}
      <label className="mb-4 mt-4 block cursor-pointer variable-btn border border-primary">
        <input
          type="file"
          id="photoInput"
          accept="image/*"
          name="image"
          className="hidden"
          onChange={handleChangeAvatar} // Updated function reference
        />
        Choose Photo
      </label>
      <Button
        loading={loading}
        isDisabled={image === blankAvatar} // Disable if no image is chosen
      >
        Next
      </Button>
    </form>
  );
}
