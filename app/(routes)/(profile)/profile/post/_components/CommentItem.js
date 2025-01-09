import Image from "next/image";
import profilePic from "@/assets/avatar/avatar.png";
import formateTime from "@/utils/formateTime";
export default function CommentItem({ title, name, avatar, time }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white border rounded-lg shadow-sm">
      <Image
        width={40}
        height={40}
        className="w-10 h-10 rounded-full object-cover"
        src={avatar ? avatar : profilePic}
        alt="Profile Picture"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h2 className="text-base font-medium">{name}</h2>
          <div>
            <p className="text-xs text-gray-500">{formateTime(time)}</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 mt-1">{title}</p>
      </div>
    </div>
  );
}
