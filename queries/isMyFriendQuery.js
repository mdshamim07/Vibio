import { getUser } from "@/actions";
import { dbConnect } from "@/connection/dbConnect";
import { RequestListModel } from "@/models/RequestListModel";

export default async function isMyFriendQuery(friendId) {
  try {
    await dbConnect();
    const user = await getUser();

    if (!user?._id) {
      return {
        ok: false,
        message: "User not authenticated.",
        isFriend: false,
      };
    }

    // Check if the given `friendId` is a friend
    const response = await RequestListModel.findOne({
      $or: [
        {
          requestedUserId: user._id,
          recipient: friendId,
        },
        {
          requestedUserId: friendId,
          recipient: user._id,
        },
      ],
    });

    return {
      ok: true,
      isFriend: !!response, // `true` if a record exists, `false` otherwise
    };
  } catch (err) {
    return {
      ok: false,
      message: err.message,
      isFriend: false,
    };
  }
}
