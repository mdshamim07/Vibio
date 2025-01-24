import Image from "next/image";
import ConfirmButton from "./ConfirmButton";

export default function FriendReqItem({ userImage, name, id, user }) {

  return (
    <div className="flex items-center gap-3 justify-between">
      <div className="flex gap-3">
        <div className="w-[50px] h-[50px]">
          <Image
            width={50}
            height={50}
            className="w-full h-full rounded-full object-cover"
            src={userImage}
            alt="Friend Request"
          />
        </div>
        <div className="w-[80%]">
          <p className="text-sm font-medium">
            {name} sent you a friend request.
          </p>
          <div className="flex gap-2 mt-2">
            <ConfirmButton id={id} user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
