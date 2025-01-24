import { getUser } from "@/actions";
import formateMongo from "@/app/api/helpers/formateMongo";
import { dbConnect } from "@/connection/dbConnect";
import { RequestListModel } from "@/models/RequestListModel";
import { UserModel } from "@/models/UserModel";

export default async function getFriends(limitOfFriend) {
  try {
    await dbConnect();
    const user = await getUser();

    if (!user?._id) {
      return {
        ok: false,
        message: "User not authenticated.",
        error: true,
      };
    }
    // Find friends with status "accepted"
    const friends = await RequestListModel.find({
      $and: [
        { status: "accepted" },
        {
          $or: [{ requestedUserId: user._id }, { recipient: user._id }],
        },
      ],
    });
    // Extract the actual friend IDs (other than the current user's ID)
    const friendIds = friends.map((fr) =>
      fr.requestedUserId.toString() === user._id.toString()
        ? fr.recipient
        : fr.requestedUserId
    );
    // Fetch user details of friends
    const friendDetails = await UserModel.find(
      { _id: { $in: friendIds } },
      { firstName: 1, lastName: 1, _id: 1, avatar: 1 } // Fetch only required fields
    ).limit(limitOfFriend);
    return formateMongo(friendDetails);
  } catch (err) {
    return {
      ok: false,
      message: err.message,
      error: true,
    };
  }
}
