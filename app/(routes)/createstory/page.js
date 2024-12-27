import CreateStoryContent from "./_components/CreateStoryContent";

export default function page() {
  return (
    <div className="flex flex-col lg:flex-row gap-2 w-full mt-2 h-[80%] bg-secondaryBg rounded-lg shadow-lg overflow-hidden">
      {/* Left Panel */}
      <CreateStoryContent />
    </div>
  );
}
