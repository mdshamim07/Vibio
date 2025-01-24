import getNavCount from "@/queries/getNavCount";
import ChatListModalButton from "./ChatListModalButton";
import FriendListModalButton from "./FriendListModalButton";
import NotificationButton from "./NotificationButton";

export default async function NavActions() {
  const counts = await getNavCount();

  return (
    <>
      <ChatListModalButton />
      <FriendListModalButton
        totalFriendRequests={counts?.totalFriendRequests}
      />
      <NotificationButton totalNotification={counts?.totalNotification} />
    </>
  );
}
