import * as React from "react";

import Spacer from "../../atoms/Spacer";
import NavButton from "../../Header/NavButton";

const NotLoggedInMessage: React.FC = () => (
  <div className="flex flex-col items-center">
    <p className="text-base">
      このチャレンジを達成するためにはログイン/登録してください
    </p>
    <Spacer size="30px" />
    <div className="flex gap-x-3">
      <NavButton text="SignUp" primary={false} dest="/signup" />
      <NavButton text="Login" primary dest="/login" />
    </div>
  </div>
);

export default NotLoggedInMessage;
