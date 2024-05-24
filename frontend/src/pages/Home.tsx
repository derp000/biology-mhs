import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState<string | null>(null);
  const units = [];
  for (let i = 1; i <= 15; i++) {
    units.push(
      <NavLink
        to={`/ch${i}`}
        className="bg-purple-300 text-center text-2xl font-semibold rounded-lg p-4"
      >
        <button>Chapter {i}</button>
      </NavLink>
    );
  }

  const auth = getAuth();
  // const user = auth.currentUser;
  console.log("authstuff");
  // console.log(user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName);
      }
    });
  }, [auth]);

  return (
    <div className="bg-red-300">
      <div className="p-24 bg-blue-300">
        {name && <p>Hi {name}</p>}
        <button onClick={() => signOut(auth)}>Sign Out</button>
        <div className="flex flex-col gap-5 text-white max-w-[72rem] mx-auto lg:mb-24 mb-6">
          {units}
        </div>
      </div>
    </div>
  );
};

export default Home;
