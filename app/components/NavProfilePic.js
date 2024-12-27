"use client";

import useMedia from "../hooks/useMedia";

export default function NavProfilePic() {
  const { media, setMedia } = useMedia();
  return (
    <div
      onClick={() => {
        setMedia({
          ...media,
          navContent: !media?.navContent,
        });
      }}
      className="select-none nav-img w-[40px] h-[40px] cursor-pointer"
    >
      <img
        className="w-full h-full rounded-full nav-img"
        src="https://images.pexels.com/photos/29664446/pexels-photo-29664446/free-photo-of-scenic-aerial-view-of-madeira-village.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
}
