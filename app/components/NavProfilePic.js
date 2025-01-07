"use client";

import Image from "next/image";
import useMedia from "../hooks/useMedia";
import profilePic from "@/assets/avatar/avatar.png";
export default function NavProfilePic({ avatar, firstName }) {
  const { media, setMedia } = useMedia();
  return (
    <div
      onClick={() => {
        setMedia({
          ...media,
          navContent: !media?.navContent,
        });
      }}
      className="select-none nav-img bg-secondaryBg flex justify-center rounded-full items-center text-xl font-medium w-[40px] h-[40px] cursor-pointer"
    >
      {avatar.length > 0 ? (
        <Image
          width={40}
          height={40}
          className="w-full h-full rounded-full nav-img object-cover"
          src={avatar ? avatar : profilePic}
          alt="profile-pic"
        />
      ) : (
        <h2>{firstName.charAt(0).toUpperCase()}</h2>
      )}
    </div>
  );
}
