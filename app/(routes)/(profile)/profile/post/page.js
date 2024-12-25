import PostItem from "./_components/PostItem";

export default function page() {
  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="pb-4 w-full lg:w-[50%]">
        <PostItem />
      </div>
    </div>
  );
}
