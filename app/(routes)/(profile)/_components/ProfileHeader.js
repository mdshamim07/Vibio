import { getUser } from "@/actions";
import ProfilePicture from "./ProfilePicture";
import Link from "next/link";

export default async function ProfileHeader() {
  const user = await getUser();
  const { work, education, location, bio, skills } = user && user?.about;

  return (
    <div className="bg-white shadow-md">
      <div className="relative">
        {/* Profile Picture */}
        <ProfilePicture avatar={user?.avatar} />
      </div>
      {/* User Info */}
      <div className="pt-16 px-8 pb-4">
        <h1 className="text-2xl font-bold">
          {user ? user.firstName + " " + user?.lastName : "No Name"}
        </h1>
        {user?.about?.bio && (
          <p className="text-gray-600">{user?.about?.bio}</p>
        )}

        <Link href="/profile/about" className="btn mt-2">
          Edit Your Profile
        </Link>
      </div>
    </div>
  );
}
