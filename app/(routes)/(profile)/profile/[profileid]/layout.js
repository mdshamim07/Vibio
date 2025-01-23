import ProfileHeader from "../../_components/ProfileHeader";
import ProfileNavigator from "../../_components/ProfileNavigator";

export default async function layout({ children, params }) {
  const param = await params;
  return (
    <div className="mt-2">
      <ProfileHeader params={param} />
      <ProfileNavigator params={param} />
      {children}
    </div>
  );
}
