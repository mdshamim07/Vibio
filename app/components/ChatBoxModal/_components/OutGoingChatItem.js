export default function OutGoingChatItem({ text }) {
  return (
    <div className="flex justify-end">
      <div className="bg-primary text-white py-2 px-4 rounded-lg max-w-[70%]">
        {text}
      </div>
    </div>
  );
}
