import getNotifications from "@/queries/getNotifications";
import CloseModalButton from "./CloseModalButton";
import NotificationItem from "./_components/NotificationItem";

export default async function NotificationModal() {
  const notifications = await getNotifications();

  return (
    <div id="modal">
      <div className="bg-white fixed right-2 top-16 rounded-lg w-[95%] sm:w-[400px] z-50">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <CloseModalButton mode="notification" />
        </div>
        {/* Modal Body */}
        <div className="p-4 h-[400px] overflow-y-auto">
          <div className="space-y-4">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <NotificationItem
                  contentRef={notification?.contentRef}
                  createdAt={notification?.createdAt}
                  content={notification?.content}
                  key={notification._id}
                  userImage={notification?.userId?.avatar}
                />
              ))
            ) : (
              <h3 className="text-center mt-4 ">No Notification </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
