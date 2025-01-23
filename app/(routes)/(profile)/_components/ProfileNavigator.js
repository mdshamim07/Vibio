import NavigatorItem from "./NavigatorItem";

export default function ProfileNavigator({ params }) {
  const profileNavigations = [
    {
      id: 1,
      title: "Profile",
      href: `/profile/${params?.profileid}`,
    },
    {
      id: 2,
      title: "Posts",
      href: `/profile/${params?.profileid}/post`,
    },
    {
      id: 3,
      title: "About",
      href: `/profile/${params?.profileid}/about`,
    },
    {
      id: 4,
      title: "Photos",
      href: `/profile/${params?.profileid}/photos`,
    },
  ];
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
