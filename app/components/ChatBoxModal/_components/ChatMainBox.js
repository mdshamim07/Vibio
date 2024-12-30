import IncommingChatItem from "./IncommingChatItem";
import OutGoingChatItem from "./OutGoingChatItem";

export default function ChatMainBox() {
  return (
    <div className="p-4 h-[350px] md:h-[400px] overflow-y-auto flex flex-col gap-3">
      {/* Example Message Sent */}
      <OutGoingChatItem />
      {/* Example Message Received */}
      <IncommingChatItem />
    </div>
  );
}
