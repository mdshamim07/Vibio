import StoryViewItem from "./_components/StoryViewItem";

export default async function page({ params }) {
  const param = await params;

  return (
    <>
      {/* <StoryPreviousButton /> */}
      <StoryViewItem param={param} />
      {/* <StoryNextButton /> */}
    </>
  );
}
