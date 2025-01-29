
import ChatListModal from "../ChatListModal/ChatListModal";
import ChatListModalContainer from "../ChatListModal/ChatListModalContainer";
import ConfirmAlert from "../ConfirmationAlert/ConfirmAlert";
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
    
      <ConfirmAlert>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Are you sure?</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Are you sure you want to proceed with this action? This cannot be
          undone.
        </p>
      </ConfirmAlert>
    </>
  );
}
