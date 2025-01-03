import Image from "next/image";
import profilePic from "@/assets/avatar/avatar.png";
export default function FriendSuggestionItem({ name }) {
  return (
    <div className="p-2 shadow-xl">
      <Image
        width={1260}
        height={750}
        className="h-[250px] object-cover w-full"
        src={profilePic}
        alt="profile-pic"
      />
      <h2 className="font-medium">{name}</h2>
      <p className="text-sm text-gray-700 mb-2">2 Mutual Friends</p>
      <button className="btn w-full">Add Friend</button>
      <button className="variable-btn border w-full mt-2 border-primary">
        Remove
      </button>
    </div>
  );
}
