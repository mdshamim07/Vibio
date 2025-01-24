import { getFriendRequestionAction } from "@/actions/addFriendAction";
import CloseModalButton from "../NotificationModal/CloseModalButton";
import FriendReqItem from "./_components/FriendReqItem";

export default async function FriendListModal() {
  const getFriendReq = await getFriendRequestionAction();

  return (
    <div id="modal">
      <div className="bg-white fixed right-2 top-16 rounded-lg z-50 w-[90%] sm:w-[400px]">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold">Friend Requests</h2>
          <CloseModalButton mode="friendList" />
        </div>
        {/* Modal Body */}
        <div className="p-4 h-[400px] overflow-y-auto">
          {/* Friend Requests */}

          <div className="space-y-4">
            {getFriendReq.length > 0 ? (
              getFriendReq.map((friend) => (
                <FriendReqItem
                  id={friend?._id}
                  user={friend?.requestedUserId}
                  userImage={friend?.recipient?.avatar}
                  name={`${friend?.recipient?.firstName} ${friend?.recipient?.lastName}`}
                  key={friend?._id}
                />
              ))
            ) : (
              <h3 className="text-center mt-4">No Friend Request </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
