import CloseModalButton from "../NotificationModal/CloseModalButton";

export default function FriendListModal() {
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
          <h3 className="text-gray-700 font-medium mb-2">Friend Requests</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 justify-between">
              <div className="flex gap-3">
                <div className="w-[50px] h-[50px]">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://via.placeholder.com/40"
                    alt="Friend Request"
                  />
                </div>
                <div className="w-[80%]">
                  <p className="text-sm font-medium">
                    Sanjida Kawsar sent you a friend request.
                  </p>
                  <div className="flex gap-2">
                    <button className="bg-primary text-white text-sm px-3 py-1 rounded hover:bg-hover">
                      Confirm
                    </button>
                    <button className="bg-gray-300 text-gray-800 text-sm px-3 py-1 rounded hover:bg-gray-400">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
