import { getUser } from "@/actions";
import profilePic from "@/assets/avatar/avatar.png";
import Image from "next/image";
export default async function StoryUser() {
  const user = await getUser();
  return (
    <div className="flex items-center gap-4 mb-4">
      <input name="user" defaultValue={user?._id} readOnly type="hidden" />
      <div className="w-[50px] h-[50px]">
        <Image
          width={100}
          height={100}
          className="w-full h-full rounded-full object-cover"
          src={user?.avatar.length > 0 ? user?.avatar : profilePic}
          alt="User Profile"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-medium">Md Shamim</span>
        <select name="audience" className="text-left">
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="friends">Friends</option>
        </select>
      </div>
    </div>
  );
}
