import ProfileHeader from "../_components/ProfileHeader";
import ProfileNavigator from "../_components/ProfileNavigator";

export default function layout({ children }) {
  return (
    <>
      <ProfileHeader />
      <ProfileNavigator />
      {children}
    </>
  );
}
