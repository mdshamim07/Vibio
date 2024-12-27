import StoryContent from "./_components/StoryContent";
import StoryNextButton from "./_components/StoryNextButton";
import StoryPreviousButton from "./_components/StoryPreviousButton";
import StoryTimeLine from "./_components/StoryTimeLine";

export default function page() {
  return (
    <>
      <StoryPreviousButton />
      <StoryNextButton />
      <StoryTimeLine />
      <StoryContent />
    </>
  );
}
