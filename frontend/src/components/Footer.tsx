import { NavLink } from "react-router-dom";

// TODO: remove image in mobile, just put name on left and info on right as icons
const Footer = () => {
  return (
    <footer className="bg-text-200 flex p-5 text-white">
      <div className="max-w-[72rem] flex flex-col mx-auto justify-between gap-2 text-center">
        <NavLink to="/about" className="underline">
          About
        </NavLink>
        <p>
          Created by{" "}
          <NavLink
            to="https://derp000.github.io/"
            target="_blank"
            className="underline"
          >
            Christopher Cao
          </NavLink>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
