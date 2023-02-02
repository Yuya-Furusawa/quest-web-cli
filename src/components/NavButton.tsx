import * as React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  text: string;
  primary: boolean;
  dest: string;
};

const NavButton: React.FC<Props> = ({ text, primary, dest }) => (
  <NavLink to={dest}>
    <div
      className={`flex items-center justify-center rounded cursor-pointer hover:opacity-75 px-3 py-2 text-sm min-w-[80px] ${
        primary ? "bg-sky-600 text-white" : "text-sky-600 border border-sky-600"
      }`}
    >
      {text}
    </div>
  </NavLink>
);

export default NavButton;
