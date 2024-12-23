"use client";
import Button from "@/app/components/Button";
import blankAvatar from "@/assets/avatar/avatar.png";
import Image from "next/image";
import { useState } from "react";
export default function AvatarPreview() {
  const [image, setImage] = useState(blankAvatar);
  function handleChangeAvatar(e) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
  return (
    <>
      <div className="relative w-32 h-32 rounded-full  border border-gray-300 overflow-hidden">
        <Image
          width={128}
          height={128}
          id="photoPreview"
          src={image}
          alt="Profile Photo Preview"
          className="w-full h-full object-cover "
        />
      </div>
      {/* Upload Button */}
      <label className="cursor-pointer variable-btn border border-primary">
        <input
          type="file"
          id="photoInput"
          accept="image/*"
          className="hidden"
          onChange={handleChangeAvatar}
        />
        Choose Photo
      </label>

      <Button isDisabled={image === blankAvatar ? true : false}>Next</Button>
    </>
  );
}
