import CloseModalButton from "../NotificationModal/CloseModalButton";
import ChatListItem from "./_components/ChatListItem";

export default function ChatListModal() {
  return (
    <div id="modal">
      <div className="bg-white fixed right-2 top-16 rounded-lg w-[95%] sm:w-[400px] z-50">
        <div className="bg-white shadow-lg rounded-lg">
          {/* Chat Modal Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-semibold text-lg">Chats</h2>
            <CloseModalButton mode="chatList" />
          </div>
          {/* Chat Modal Body */}
          <div className="p-4 h-[500px] overflow-y-auto">
            <div className="space-y-4">
              {/* Example Chat Items */}
              <ChatListItem />
              {/* Repeat similar blocks */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
