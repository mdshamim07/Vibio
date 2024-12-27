import FriendSuggestionItem from "./_components/FriendSuggestionItem";

export default function page() {
  return (
    <main className="container mx-auto flex justify-center items-center">
      <div className="pb-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4 lg:w-[50%]">
        <FriendSuggestionItem />
      </div>
    </main>
  );
}
