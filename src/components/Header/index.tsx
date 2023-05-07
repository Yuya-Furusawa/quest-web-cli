import * as React from "react";
import { NavLink } from "react-router-dom";

import type { User } from "../../libs/type";
import { AuthContext } from "../../context/auth";
import NavButton from "./NavButton";

const Header: React.FC = () => {
  const context = React.useContext(AuthContext);

  return (
    <div className="flex justify-center w-full h-16 shadow">
      <div className="flex justify-between items-center w-2/5">
        <NavLink to="/">
          <div className="text-sky-600 font-bold leading-[4rem]">
            Quest Web App
          </div>
        </NavLink>
        <Buttons user={context.user} />
      </div>
    </div>
  );
};

type Props = {
  user: User | null;
};

const Buttons: React.FC<Props> = ({ user }) => {
  if (!user)
    return (
      <div className="flex gap-x-3">
        <NavButton text="SignUp" primary={false} dest="/signup" />
        <NavButton text="Login" primary dest="/login" />
      </div>
    );

  return (
    <NavLink to="/profile">
      <div className="text-sky-600">{user.username}</div>
    </NavLink>
  );
};

export default Header;
