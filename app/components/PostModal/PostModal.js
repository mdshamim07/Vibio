import CloseModalButton from "../NotificationModal/CloseModalButton";
import RichTextEditor from "../RichTextEditor";

export default function PostModal() {
  return (
    <div className="w-full flex justify-center items-center h-screen z-50 fixed left-0 top-0 bg-[rgba(0,0,0,0.5)]">
      <div className="bg-white rounded-lg w-[90%] h-[80vh] sm:w-[500px] flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold">Create Post</h2>
          <CloseModalButton mode="postModal" />
        </div>
        {/* Modal Body */}
        <div className="p-4 space-y-4 flex-1 overflow-y-auto">
          {/* User Info */}
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[50px]">
              <img
                className="w-full h-full rounded-full object-cover"
                src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                alt="User Profile"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium">Md Shamim</span>
              <select className="text-left">
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="friends">Friends</option>
              </select>
            </div>
          </div>
          {/* Rich Text Editor */}
          <RichTextEditor />
          {/* Photo Upload Section */}
          <div className="border rounded-md p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Add Photos</h3>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <div className="w-[80px] h-[80px] bg-gray-100 border rounded-md flex justify-center items-center">
                <label
                  htmlFor="photo-upload"
                  className="cursor-pointer text-gray-500 text-sm"
                >
                  +
                </label>
                <input type="file" id="photo-upload" className="hidden" />
              </div>
            </div>
          </div>
          {/* Video Upload Section */}
          <div className="border rounded-md p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Add Videos</h3>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <div className="w-[80px] h-[80px] bg-gray-100 border rounded-md flex justify-center items-center">
                <label
                  htmlFor="video-upload"
                  className="cursor-pointer text-gray-500 text-sm"
                >
                  +
                </label>
                <input type="file" id="video-upload" className="hidden" />
              </div>
            </div>
          </div>
        </div>
        {/* Modal Footer */}
        <div className="border-t p-4 bg-white sticky bottom-0 flex justify-end">
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
