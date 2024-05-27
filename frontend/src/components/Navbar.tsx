import { SignOut } from "@emotion-icons/octicons/SignOut";
import { signOut } from "firebase/auth";
import { auth } from "../config/config";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const path = useLocation();
  const isLoggedIn = !path.pathname.endsWith("login");

  return (
    <nav className="bg-text-100 text-white p-5">
      <div className="max-w-[72rem] flex flex-row mx-auto items-center justify-between">
        <h1 className="text-xl font-bold">Magnet BioMentor</h1>
        {isLoggedIn && (
          <button
            className="flex flex-row gap-2 items-center"
            onClick={() => signOut(auth)}
          >
            Sign Out
            <SignOut height={25} width={20} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
