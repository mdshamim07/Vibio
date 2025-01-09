import Image from "next/image";
import ThreeDots from "./ThreeDots";
import profilePic from "@/assets/avatar/avatar.png";
import formateTime from "@/utils/formateTime";
export default function PostAuthor({ user, time, audience }) {
  let audi;
  if (audience === "public") {
    audi = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-earth"
      >
        <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
        <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
        <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
        <circle cx={12} cy={12} r={10} />
      </svg>
    );
  } else if (audience === "private") {
    audi = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-lock"
      >
        <rect width={18} height={11} x={3} y={11} rx={2} ry={2} />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    );
  } else {
    audi = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-users"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx={9} cy={7} r={4} />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
        <Image
          width={50}
          height={50}
          className="w-[50px] h-[50px] rounded-full object-cover"
          src={user?.avatar ? user?.avatar : profilePic}
          alt="Profile pic"
        />
        <div>
          <p>Md Shamim Mia</p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">{formateTime(time)}</span>
            {audi}
          </div>
        </div>
      </div>
      <ThreeDots />
    </div>
  );
}
