import Link from "next/link";
import Logo from "./Logo";
import NavActions from "./NavActions";
import NavProfilePic from "./NavProfilePic";
import SearchBox from "./SearchBox";
import { getUser } from "@/actions";

export default async function Navbar() {
  const user = await getUser();

  return (
    <div className="shadow-md bg-white">
      <div className="container py-2 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 w-full">
          <Logo />
          <SearchBox />
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <NavActions />
              <NavProfilePic
                avatar={user ? user?.avatar : "No Avatar"}
                firstName={user ? user?.firstName : "No Name"}
              />
            </>
          ) : (
            <Link href="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
