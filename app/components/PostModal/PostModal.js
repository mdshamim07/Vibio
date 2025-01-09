import UserInfoPostaModal from "../NavContentModal/_components/UserInfoPostaModal";
import CloseModalButton from "../NotificationModal/CloseModalButton";
import RichTextEditor from "../RichTextEditor";
import PostForm from "./_components/PostForm";

export default function PostModal() {
  return (
    <div className="w-full flex justify-center items-center h-screen z-50 fixed left-0 top-0 bg-[rgba(0,0,0,0.5)]">
      <PostForm>
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold">Create Post</h2>
          <CloseModalButton mode="postModal" />
        </div>
        {/* Modal Body */}
        <div className="p-4 space-y-4 flex-1 overflow-y-auto">
          <UserInfoPostaModal />
          {/* Rich Text Editor */}
          <RichTextEditor />
          {/* Photo Upload Section */}
          {/* <PhotoUploadOption /> */}
          {/* Video Upload Section */}
          {/* <VideoUploadOption /> */}
        </div>
      </PostForm>
    </div>
  );
}
