import CloseModalButton from "./CloseModalButton";

export default function NotificationModal() {
  return (
    <div id="modal">
      <div className="bg-white fixed right-2 top-16 rounded-lg w-[95%] sm:w-[400px]">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <CloseModalButton mode="notification" />
        </div>
        {/* Modal Body */}
        <div className="p-4 h-[400px] overflow-y-auto">
          {/* New Notifications */}
          <h3 className="text-gray-700 font-medium mb-2">New</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-[50px] h-[50px]">
                <img
                  className="object-cover w-full h-full rounded-full"
                  src="https://images.pexels.com/photos/29734216/pexels-photo-29734216/free-photo-of-cozy-winter-embrace-of-mother-and-child.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="User Profile"
                />
              </div>
              <div className="w-[80%]">
                <p className="text-xs font-medium">
                  Pujon Das Auvi, KAWSAR KABIR and 14 others posted in Learn
                  with Sumit - LWS
                </p>
                <span className="text-xs text-gray-500">7m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
