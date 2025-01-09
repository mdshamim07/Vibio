export default function VideoUploadOption() {
  return (
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
  );
}
