import { getUser } from "@/actions";
import Image from "next/image";
import profilePic from "@/assets/avatar/avatar.png";
export default async function UserInfoPostaModal() {
  const user = await getUser();

  return (
    <div className="flex items-center gap-4">
      <div className="w-[50px] h-[50px]">
        <Image
          width={50}
          height={50}
          className="w-full h-full rounded-full object-cover"
          src={user?.avatar ? user?.avatar : profilePic}
          alt="User Profile"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-medium">
          {user?.firstName} {user?.lastName}
        </span>
        <select name="audience" className="border text-left">
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="friends">Friends</option>
        </select>
      </div>
    </div>
  );
}
