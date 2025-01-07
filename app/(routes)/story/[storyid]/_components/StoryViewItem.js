import StoryContent from "./StoryContent";
import StoryTimeLine from "./StoryTimeLine";
const stories = ["", "", "", "", ""];
export default function StoryViewItem({ param }) {
  return (
    <>
      <StoryTimeLine />
      <StoryContent param={param} />
    </>
  );
}
