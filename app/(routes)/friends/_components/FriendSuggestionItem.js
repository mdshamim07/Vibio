export default function FriendSuggestionItem() {
  return (
    <div className="p-2 shadow-xl">
      <img
        className="h-[250px] object-cover w-full"
        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <h2 className="font-medium">Md Nayeem Ahmed</h2>
      <p className="text-sm text-gray-700 mb-2">2 Mutual Friends</p>
      <button className="btn w-full">Add Friend</button>
      <button className="variable-btn border w-full mt-2 border-primary">
        Remove
      </button>
    </div>
  );
}
