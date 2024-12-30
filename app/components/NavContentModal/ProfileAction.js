"use client";
import useMedia from "@/app/hooks/useMedia";
import Link from "next/link";
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
        {avatar?.length > 0 ? (
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        ) : (
          <div className="w-[40px] h-[40px] rounded-full bg-secondaryBg flex justify-center items-center">
            {firstName.charAt(0).toUpperCase()}
          </div>
        )}
        <h2 className="text-xl font-medium">
          {firstName} {lastName}
        </h2>
      </Link>
    </li>
  );
}
