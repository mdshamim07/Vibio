export default function ChatListItem() {
  return (
    <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
      <div className="w-[50px] h-[50px]">
        <img
          className="w-full h-full rounded-full"
          src="https://via.placeholder.com/40"
          alt="User"
        />
      </div>
      <div className="w-[80%]">
        <p className="text-sm font-medium">Jane Doe</p>
        <span className="text-xs text-gray-500">Typing...</span>
      </div>
      <span className="text-xs text-gray-400">2m</span>
    </div>
  );
}
