import { getUser } from "@/actions";
import AboutInpurField from "./_components/AboutInpurField";

export default async function page() {
  const user = await getUser();
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex gap-2 items-center">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <button className="btn">Edit</button>
        </div>
        {/* Personal Information */}
        <div className="space-y-2">
          <AboutInpurField
            placeHolder="Write your First name"
            inputValue={user?.firstName}
            title="First Name"
            typeOfChanges="firstName"
          />
          <AboutInpurField
            placeHolder="Write your Last name"
            inputValue={user?.lastName}
            title="Last Name"
            typeOfChanges="lastName"
          />
          <AboutInpurField
            placeHolder="Write your work place"
            inputValue={user?.about?.work}
            title="Work Place "
            typeOfChanges="work"
          />
          <AboutInpurField
            placeHolder="Write your education "
            inputValue={user?.about?.education}
            title="Education"
            typeOfChanges="education"
          />
          <AboutInpurField
            placeHolder="Write your location "
            inputValue={user?.about?.location}
            title="Location"
            typeOfChanges="location"
          />

          <AboutInpurField
            placeHolder="Write your bio "
            inputValue={user?.about?.bio}
            title="Bio"
            mode="bio"
            typeOfChanges="bio"
          />
        </div>
      </div>
    </div>
  );
}
