export default function page() {
  return (
    <div className=" flex flex-col lg:flex-row gap-6 px-4 lg:px-16 py-6">
      {/* Left Column: About and Friends */}
      <div className="w-full lg:w-1/3">
        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">About</h2>
          <p className="text-sm text-gray-600">
            Passionate Full Stack Developer with a focus on JavaScript and
            Next.js.
          </p>
        </div>
        {/* Friends Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold mb-2">Friends</h2>
            <a
              href="friends.html"
              className="text-sm text-blue-500 cursor-pointer"
            >
              See All
            </a>
          </div>
          <p className="text-gray-600 text-sm text-center">No Friends Found!</p>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <img
                src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                alt="Friend 1"
                className="rounded-lg"
              />
              <p className="text-xs text-center mt-1">Friend 1</p>
            </div>
            <div>
              <img
                src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                alt="Friend 2"
                className="rounded-lg"
              />
              <p className="text-xs text-center mt-1">Friend 2</p>
            </div>
            <div>
              <img
                src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                alt="Friend 3"
                className="rounded-lg"
              />
              <p className="text-xs text-center mt-1">Friend 3</p>
            </div>
          </div>
        </div>
      </div>
      {/* Right Column: Posts */}
      <div className="w-full lg:w-2/3">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          {/* Create Post */}
          <div className="flex items-center gap-4">
            <img
              src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
              alt="Profile Picture"
              className="rounded-full w-12 h-12"
            />
            <input
              type="text"
              placeholder="What's on your mind, Shamim?"
              className="w-full bg-gray-100 p-2 rounded-full focus:outline-none"
            />
          </div>
        </div>
        {/* Example Post */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-2 flex justify-center items-center flex-col">
          <p className="text-sm text-gray-600">No Post Found</p>
          <button className="btn mt-2">Create New Post</button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center gap-4 mb-2">
            <img
              src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
              alt="Profile Picture"
              className="rounded-full w-12 h-12"
            />
            <div>
              <h3 className="font-semibold">Md Shamim</h3>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
          </div>
          <p className="text-gray-700 mb-2">
            Just finished building a responsive profile page with Tailwind CSS!
          </p>
          <img
            src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
            alt="Post Image"
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  );
}
