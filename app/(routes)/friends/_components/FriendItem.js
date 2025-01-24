import Image from "next/image";
import profilePic from "@/assets/avatar/avatar.png";
import UnFriendButton from "./UnFriendButton";

export default function FriendItem({ friend }) {
  return (
    <div className="p-2 shadow-xl">
      <Image
        width={1260}
        height={750}
        className="h-[250px] object-cover w-full"
        src={friend?.avatar ? friend?.avatar : profilePic}
        alt="profile-pic"
      />
      <h2 className="font-medium">
        {friend?.firstName} {friend?.lastName}
      </h2>
      <p className="text-sm text-gray-700 mb-2">2 Mutual Friends</p>
      <UnFriendButton userId={friend?._id} />
    </div>
  );
}
