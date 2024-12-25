import CloseModalButton from "../NotificationModal/CloseModalButton";

export default function ChatListModal() {
  return (
    <div className="hidden lg:block lg:w-1/3 fixed top-16 right-2">
      <div className="bg-white shadow-lg rounded-lg">
        {/* Chat Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold text-lg">Chats</h2>
        <CloseModalButton mode="chatList"/>
        </div>
        {/* Chat Modal Body */}
        <div className="p-4 h-[500px] overflow-y-auto">
          <h3 className="text-gray-700 font-medium mb-2">Active Chats</h3>
          <div className="space-y-4">
            {/* Example Chat Items */}
            <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
              <div className="w-[50px] h-[50px]">
                <img
                  className="w-full h-full rounded-full"
                  src="https://via.placeholder.com/40"
                  alt="User"
                />
              </div>
              <div className="w-full">
                <p className="text-sm font-medium">Jane Doe</p>
                <span className="text-xs text-gray-500">Typing...</span>
              </div>
              <span className="text-xs text-gray-400">2m</span>
            </div>
            {/* Repeat similar blocks */}
          </div>
        </div>
      </div>
    </div>
  );
}
