import getFriendList from "@/queries/getFriendList";
import FriendSuggestionItem from "./_components/FriendSuggestionItem";
import { getFriendRequestionAction } from "@/actions/addFriendAction";

export default async function page() {
  const suggestionList = await getFriendList();
  const getFriendReq = await getFriendRequestionAction();

  return (
    <main className="container mx-auto">
      <h1 className="text-xl font-medium mt-2">Friend Request</h1>

      <div className="flex justify-center items-center">
        <div className="pb-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2 lg:w-[50%]">
          {getFriendReq.length > 0 ? (
            <>
              {getFriendReq.map((friend) => (
                <FriendSuggestionItem
                  id={friend?._id}
                  key={friend?._id}
                  friend={friend}
                  mode="request-item"
                />
              ))}
            </>
          ) : (
            <p>No Friend list suggestion found!</p>
          )}
        </div>
      </div>
      <h1 className="text-xl font-medium mt-2">Suggestions</h1>

      <div className="flex justify-center items-center">
        <div className="pb-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2 lg:w-[50%]">
          {suggestionList.length > 0 ? (
            <>
              {suggestionList.map((friend) => (
                <FriendSuggestionItem
                  id={friend?._id}
                  key={friend?._id}
                  avatar={friend?.avatar}
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
