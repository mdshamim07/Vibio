"use client";
import useMedia from "@/app/hooks/useMedia";
import Image from "next/image";
import Link from "next/link";
import profilePic from "@/assets/avatar/avatar.png";
export default function ProfileAction({ avatar, firstName, lastName }) {
  const { media, setMedia } = useMedia();
  return (
    <li className="hover:bg-[#e0e0e0] p-2 cursor-pointer">
      <Link
        onClick={() => {
          setMedia({
            ...media,
            navContent: false,
          });
        }}
        href="/profile"
        className="flex items-center  gap-2 w-full"
      >
        <Image
          width={40}
          height={40}
          className="w-[40px] h-[40px] rounded-full"
          src={avatar ? avatar : profilePic}
          alt=""
        />

        <h2 className="text-xl font-medium">
          {firstName} {lastName}
        </h2>
      </Link>
    </li>
  );
}
