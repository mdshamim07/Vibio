import PostItem from "../(profile)/profile/post/_components/PostItem";

export default function page() {
  return (
    <main className="container mx-auto flex justify-center items-center">
      <div className="pb-4 w-full lg:w-[50%]">
        <PostItem />
      </div>
    </main>
  );
}
