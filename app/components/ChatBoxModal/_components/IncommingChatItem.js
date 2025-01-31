import Image from "next/image";
import profilePic from "@/assets/avatar/avatar.png";
export default function IncommingChatItem({ text, user }) {
  console.log(user);

  return (
    <div className="flex justify-start gap-3 items-start">
      {/* Sender Avatar */}
      <div className="relative w-[50px] h-[50px] rounded-full font-semibold flex justify-center items-center bg-[#e0e0e0]">
        <Image
          width={50}
          height={50}
          alt="profile pic"
          className="w-full h-full rounded-full object-cover"
          src={user?.avatar || profilePic}
        />
      </div>
      {/* Message Bubble */}
      <div className="relative bg-gray-100 mt-2 text-gray-800 py-2 px-4 rounded-2xl shadow-sm max-w-[70%]">
        <p className="leading-relaxed text-sm">{text}</p>
        {/* Subtle Triangle Pointer */}
        <div className="absolute top-3 left-[-8px] w-4 h-4 bg-gray-100 transform rotate-45 shadow-sm" />
      </div>
    </div>
  );
}
