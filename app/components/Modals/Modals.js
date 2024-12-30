import ChatBoxModal from "../ChatBoxModal/ChatBoxModal";
import ChatBoxModalContainer from "../ChatBoxModal/ChatBoxModalContainer";
import ChatListModal from "../ChatListModal/ChatListModal";
import ChatListModalContainer from "../ChatListModal/ChatListModalContainer";
import FriendListModal from "../FriendListModal/FriendListModal";
import FriendListModalContainer from "../FriendListModal/FriendListModalContainer";
import NavContentModal from "../NavContentModal/NavContentModal";
import NavContentModalContainer from "../NavContentModal/NavContentModalContainer";
import NotificationModal from "../NotificationModal/NotificationModal";
import NotificationModalContainer from "../NotificationModal/NotificationModalContainer";
import PostModal from "../PostModal/PostModal";
import PostModalContainer from "../PostModal/PostModalContainer";
import ShareModal from "../ShareModal/ShareModal";
import ShareModalContainer from "../ShareModal/ShareModalContainer";
import StoryModal from "../StoryModal/StoryModal";
import StoryModalContainer from "../StoryModal/StoryModalContainer";

export default function Modals() {
  return (
    <>
      <NotificationModalContainer>
        <NotificationModal />
      </NotificationModalContainer>
      <FriendListModalContainer>
        <FriendListModal />
      </FriendListModalContainer>
      <ChatListModalContainer>
        <ChatListModal />
      </ChatListModalContainer>
      <PostModalContainer>
        <PostModal />
      </PostModalContainer>
      <ShareModalContainer>
        <ShareModal />
      </ShareModalContainer>
      <StoryModalContainer>
        <StoryModal />
      </StoryModalContainer>
      <NavContentModalContainer>
        <NavContentModal />
      </NavContentModalContainer>
      <ChatBoxModalContainer>
        <ChatBoxModal />
      </ChatBoxModalContainer>
    </>
  );
}
