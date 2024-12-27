import CloseModalButton from "../NotificationModal/CloseModalButton";
import PhotoStoryCard from "./_components/PhotoStoryCard";

export default function StoryModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] sm:w-[600px] rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <CloseModalButton mode="storyModal" />

        <div className="flex items-center justify-center gap-6">
          {/* Photo Story Card */}
          <PhotoStoryCard />

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
