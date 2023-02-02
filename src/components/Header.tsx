import * as React from "react";

import NavButton from "./NavButton";

const Header = () => (
  <div className="flex justify-center w-full h-16 shadow">
    <div className="flex justify-between items-center w-2/5">
      <div className="text-sky-600 font-bold leading-[4rem]">Quest Web App</div>
      <div className="flex gap-x-3">
        <NavButton text="SignUp" primary={false} dest="/" />
        <NavButton text="Login" primary dest="/login" />
      </div>
    </div>
  </div>
);

export default Header;
