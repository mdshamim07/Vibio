import { getUser } from "@/actions";
import ProfileAction from "./ProfileAction";
import LogOutButton from "./LogOutButton";
import { sidebarContents } from "../homepage/_components/LeftSideBar";
import Link from "next/link";

export default async function NavContentModal() {
  const user = await getUser();
  return (
    <div className="nav-actions z-50 bg-white shadow-xl w-[300px] p-6 right-2 fixed top-[70px]">
      <ul>
        <ProfileAction
          id={user?._id}
          avatar={user?.avatar}
          firstName={user ? user?.firstName : "No"}
          lastName={user ? user?.lastName : "Name"}
        />
        <hr />
      </ul>
      <ul className="lg:hidden">
        {sidebarContents.map((item) => (
          <li key={item?.id} className="mt-2 ">
            <Link
              href={item?.link}
              className="flex items-center gap-4 text-gray-600 cursor-pointer"
            >
              {item?.svg}
              <span>{item?.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <LogOutButton />
    </div>
  );
}
