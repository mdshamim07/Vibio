import Image from "next/image";
import profilePic from "@/assets/avatar/avatar.png";
import AddFriendButton from "./AddFriendButton";
import { isAlreadyFriend } from "@/actions/addFriendAction";
import getUserById from "@/queries/getUserById";
// import getUserById from "@/queries/getUserById";
export default async function FriendSuggestionItem({
  name,
  avatar,
  id,
  friend,
  mode,
}) {
  const isFriend = await isAlreadyFriend(id);
  const user = mode === "request-item" && (await getUserById(friend?.senderId));

  return (
    <div className="p-2 shadow-xl">
      <Image
        width={1260}
        height={750}
        className="h-[250px] object-cover w-full"
        src={mode === "request-item" && avatar ? avatar : profilePic}
        alt="profile-pic"
      />
      <h2 className="font-medium">
        {mode !== "request-item"
          ? name
          : user?.firstName + " " + user?.lastName}
      </h2>
      <p className="text-sm text-gray-700 mb-2">2 Mutual Friends</p>
      <AddFriendButton
        mode={mode}
        isFriend={mode !== "request-item" && isFriend?.isFriend}
        id={id}
      />
    </div>
  );
}
