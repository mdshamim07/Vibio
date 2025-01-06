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
        </div>
      </div>
    </div>
  );
}
