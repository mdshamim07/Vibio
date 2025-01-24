import profilePic from "@/assets/avatar/avatar.png";
export default function ChatListItem({ chatItem }) {
  return (
    <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
      <div className="w-[50px] h-[50px]">
        <img
          width={50}
          height={50}
          className="w-full h-full rounded-full"
          src={chatItem?.avatar ? chatItem?.avatar : profilePic}
          alt="User"
        />
      </div>
      <div className="w-[80%]">
        <p className="text-sm font-medium">
          {chatItem?.firstName} {chatItem?.lastName}
        </p>

        <span className="text-xs text-gray-500">Typing...</span>
      </div>
      <span className="text-xs text-gray-400">2m</span>
    </div>
  );
}
