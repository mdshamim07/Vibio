import CreateStoryContent from "./_components/CreateStoryContent";
import StoryUser from "./_components/StoryUser";

export default function page() {
  return (
    <div>
      {/* Left Panel */}

      <CreateStoryContent>
        <StoryUser />
      </CreateStoryContent>
    </div>
  );
}
