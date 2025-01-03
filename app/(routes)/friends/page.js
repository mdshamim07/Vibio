import getFriendList from "@/queries/getFriendList";
import FriendSuggestionItem from "./_components/FriendSuggestionItem";

export default async function page() {
  const friendList = await getFriendList();

  return (
    <main className="container mx-auto">
      <h1 className="text-xl font-medium mt-2">Suggestions</h1>
      <div className="flex justify-center items-center">
        <div className="pb-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2 lg:w-[50%]">
          {friendList.length > 0 ? (
            <>
              {friendList.map((friend) => (
                <FriendSuggestionItem
                  key={friend?._id}
                  name={`${friend?.firstName} ${friend?.lastName}`}
                />
              ))}
            </>
          ) : (
            <p>No Friend list suggestion found!</p>
          )}
        </div>
      </div>
    </main>
  );
}
