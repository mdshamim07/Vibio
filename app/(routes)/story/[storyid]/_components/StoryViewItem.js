import StoryContent from "./StoryContent";
import StoryTimeLine from "./StoryTimeLine";
const stories = ["", "", "", "", ""];
export default function StoryViewItem() {
  return (
    <>
      <StoryTimeLine />
      <StoryContent />
    </>
  );
}
