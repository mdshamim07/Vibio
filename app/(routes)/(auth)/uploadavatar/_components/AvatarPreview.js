"use client";
import { uploadPhoto } from "@/actions/uploadPhoto";
import Button from "@/app/components/Button";
import blankAvatar from "@/assets/avatar/avatar.png";
import uploadImage from "@/utils/uploadImage";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CommonErrorMessage from "../../_components/CommonErrorMessage";
export default function AvatarPreview({ avatar }) {
  const [image, setImage] = useState(blankAvatar);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function handleChangeAvatar(e) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }
  async function handleUploadImage(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const form = new FormData(e.target);
      const image = form.get("image");
      const data = new FormData(e.target);
      data.append("image", image);
      const response = await uploadImage(data);
      if (response.success) {
        const imageInsert = await uploadPhoto(response?.data?.display_url);
        if (imageInsert.ok) {
          router.push("/profile");
        }
      } else {
        setError("Something went wrong");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <form onSubmit={handleUploadImage}>
      {error && <CommonErrorMessage>{error}</CommonErrorMessage>}
      <div className="relative w-32 h-32 rounded-full  border border-gray-300 overflow-hidden">
        <Image
          width={128}
          height={128}
          id="photoPreview"
          src={avatar ? avatar : image}
          name="image"
          alt="Profile Photo Preview"
          className="w-full h-full object-cover "
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
          onChange={handleChangeAvatar}
        />
        Choose Photo
      </label>

      <Button
        loading={loading}
        isDisabled={image === blankAvatar ? true : false}
      >
        Next
      </Button>
    </form>
  );
}
