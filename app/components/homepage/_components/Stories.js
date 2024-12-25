import NewStory from "./NewStory";
import StoryItem from "./StoryItem";

export const stories = ["", "", "", "", "", "", ""];
export default function Stories() {
  return (
    <>
      <h2 className="text-xl font-medium">Stories</h2>
      <div className="flex justify-center">
        {/* Story Items Wrapper */}
        <div className="flex gap-4 p-2 overflow-x-hidden">
          <NewStory>
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="https://images.pexels.com/photos/29734216/pexels-photo-29734216/free-photo-of-cozy-winter-embrace-of-mother-and-child.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with the user's profile or default image URL
              alt="User background"
            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

            {/* Add Button */}
            <div className="absolute top-[45%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
              <div className="flex items-center justify-center w-10 h-10 bg-primary hover:bg-hover rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>

            {/* Text */}
            <div className="absolute bottom-2 left-0 w-full text-center text-white font-semibold text-sm">
              Create story
            </div>
          </NewStory>
          {/* Individual Story Item */}
          {stories.map((story, index) => (
            <StoryItem key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
