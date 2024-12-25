import ProfileHeader from "../_components/ProfileHeader";
import ProfileNavigator from "../_components/ProfileNavigator";

export default function layout({ children }) {
  return (
    <div className="mt-2">
      <ProfileHeader />
      <ProfileNavigator />
      {children}
    </div>
  );
}
