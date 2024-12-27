import StoryNextButton from "./_components/StoryNextButton";
import StoryPreviousButton from "./_components/StoryPreviousButton";
import StoryViewItem from "./_components/StoryViewItem";

export default function page() {
  return (
    <>
      <StoryPreviousButton />
      <StoryViewItem />
      <StoryNextButton />
    </>
  );
}
