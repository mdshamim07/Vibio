"use client";

import useMedia from "../hooks/useMedia";

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
        <img
          className="w-full h-full rounded-full nav-img"
          src="https://images.pexels.com/photos/29664446/pexels-photo-29664446/free-photo-of-scenic-aerial-view-of-madeira-village.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      ) : (
        <h2>{firstName.charAt(0).toUpperCase()}</h2>
      )}
    </div>
  );
}
