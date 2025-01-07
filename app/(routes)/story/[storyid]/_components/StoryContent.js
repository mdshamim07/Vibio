import getStoryItem from "@/queries/getStoryItem";

export default async function StoryContent({ param }) {
  const story = await getStoryItem(param?.storyid);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[90%] rounded-sm sm:w-[400px] h-[80vh] ">
        <div
          className={` text-white flex justify-center items-center w-full h-full`}
          style={{ backgroundColor: story?.background }}
        >
          <div dangerouslySetInnerHTML={{ __html: story?.htmlContent }} />
        </div>
      </div>
    </div>
  );
}
