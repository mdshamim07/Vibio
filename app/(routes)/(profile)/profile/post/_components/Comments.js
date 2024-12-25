export default function Comments() {
  return (
    <>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-3 p-3 bg-white border rounded-lg shadow-sm">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile Picture"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-medium">MD Shamim</h2>
              <p className="text-xs text-gray-500">1h Ago</p>
            </div>
            <p className="text-sm text-gray-700 mt-1">What the hell</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-white border rounded-lg shadow-sm">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile Picture"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-medium">MD Shamim</h2>
              <p className="text-xs text-gray-500">1h Ago</p>
            </div>
            <p className="text-sm text-gray-700 mt-1">What the hell</p>
          </div>
        </div>
      </div>
    </>
  );
}
