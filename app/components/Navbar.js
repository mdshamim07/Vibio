import Link from "next/link";
import Logo from "./Logo";
import NavActions from "./NavActions";
import NavProfilePic from "./NavProfilePic";
import SearchBox from "./SearchBox";

export default function Navbar() {
  const user = false;
  return (
    <nav className="shadow-md bg-white">
      <div className="container py-2 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 w-full">
          <Logo />
          <SearchBox />
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <NavActions />
              <NavProfilePic />
            </>
          ) : (
            <Link href="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
