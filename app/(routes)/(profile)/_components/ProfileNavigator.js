import NavigatorItem from "./NavigatorItem";

export const profileNavigations = [
  {
    id: 1,
    title: "Profile",
    href: "/profile",
  },
  {
    id: 2,
    title: "Posts",
    href: "/profile/post",
  },
  {
    id: 3,
    title: "About",
    href: "/profile/about",
  },
  {
    id: 4,
    title: "Photos",
    href: "/profile/photos",
  },
];
export default function ProfileNavigator() {
  const userId = "rakibkhanshamim";
  return (
    <div className="bg-white shadow-md mt-4 sticky top-0 z-10">
      <div className="flex justify-center gap-6 py-2">
        {profileNavigations.map((nav) => (
          <NavigatorItem href={nav?.href} key={nav?.id}>
            {nav.title}
          </NavigatorItem>
        ))}
      </div>
    </div>
  );
}
