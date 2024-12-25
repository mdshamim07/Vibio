export default function StoryModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] sm:w-[600px] rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex items-center justify-center gap-6">
          {/* Photo Story Card */}
          <div className="w-[200px] h-[300px] rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-300 flex flex-col items-center justify-center cursor-pointer transform hover:scale-105 transition-all">
            {/* Icon */}
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5h18M3 5a2 2 0 012-2h14a2 2 0 012 2M3 5v14a2 2 0 002 2h14a2 2 0 002-2V5M9 14l2-2m0 0l2 2m-2-2v6"
                />
              </svg>
            </div>
            {/* Text */}
            <p className="text-white font-semibold text-center">
              Create a Photo Story
            </p>
          </div>

          {/* Text Story Card */}
          <div className="w-[200px] h-[300px] rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center cursor-pointer transform hover:scale-105 transition-all">
            {/* Icon */}
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 9V7a4 4 0 10-8 0v2m4 11v-4m-4-4h8"
                />
              </svg>
            </div>
            {/* Text */}
            <p className="text-white font-semibold text-center">
              Create a Text Story
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
