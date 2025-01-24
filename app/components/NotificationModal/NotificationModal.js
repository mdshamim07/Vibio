import getNotifications from "@/queries/getNotifications";
import CloseModalButton from "./CloseModalButton";
import NotificationItem from "./_components/NotificationItem";
import formateTime from "@/utils/formateTime";
import Image from "next/image";
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
                  id={notification?._id}
                  contentRef={notification?.contentRef}
                  key={notification._id}
                >
                  <div className="w-[50px] h-[50px]">
                    <Image
                      width={50}
                      height={50}
                      className="object-cover w-full h-full rounded-full"
                      src={notification?.userId?.avatar}
                      alt="User Profile"
                    />
                  </div>
                  <div className="w-[80%]">
                    <p className="text-xs font-medium">
                      {notification?.content}
                    </p>
                    <span className="text-xs text-gray-500">
                      {formateTime(notification?.createdAt)}
                    </span>
                  </div>
                </NotificationItem>
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
