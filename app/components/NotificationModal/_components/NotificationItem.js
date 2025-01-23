import formateTime from "@/utils/formateTime";
import Image from "next/image";
import Link from "next/link";

export default function NotificationItem({
  content,
  createdAt,
  userImage,
  contentRef,
}) {
  return (
    <Link
      href={`/feed/${contentRef}`}
      className="p-2 flex items-center gap-3 hover:bg-gray-100 cursor-pointer"
    >
      <div className="w-[50px] h-[50px]">
        <Image
          width={50}
          height={50}
          className="object-cover w-full h-full rounded-full"
          src={userImage}
          alt="User Profile"
        />
      </div>
      <div className="w-[80%]">
        <p className="text-xs font-medium">{content}</p>
        <span className="text-xs text-gray-500">{formateTime(createdAt)}</span>
      </div>
    </Link>
  );
}
