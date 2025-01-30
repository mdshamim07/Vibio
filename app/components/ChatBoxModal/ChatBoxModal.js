import { getUser } from "@/actions";
import ChatBoxHeader from "./_components/ChatBoxHeader";
import ChatInputArea from "./_components/ChatInputArea";
import ChatMainBox from "./_components/ChatMainBox";

export default async function ChatBoxModal() {
  const user = await getUser();

  return (
    <div className="bg-white  shadow-xl fixed right-2 z-50 bottom-4 rounded-lg w-[90%] sm:w-[400px]  flex-col">
      {/* Modal Header */}
      <ChatBoxHeader />
      {/* Chat Messages Area */}
      <ChatMainBox userId={user?._id} />
      {/* Chat Input Area */}
      <ChatInputArea />
    </div>
  );
}
