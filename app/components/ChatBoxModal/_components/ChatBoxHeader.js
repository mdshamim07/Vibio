export default function ChatBoxHeader() {
  return (
    <div className="flex gap-2 items-center border-b p-4 bg-gray-50 rounded-t-lg justify-between">
      <div className="flex items-center gap-2">
        <div className="w-[50px] h-[50px] rounded-full bg-[#e0e0e0] flex justify-center items-center">
          S
        </div>
        <div>
          <h2>Md Shamim</h2>
          <p className="flex items-center gap-2 text-sm text-gray-500">
            Active Now
            <span className="w-[10px] h-[10px] rounded-full bg-primary inline-block" />
          </p>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="cursor-pointer lucide lucide-x"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </div>
  );
}
