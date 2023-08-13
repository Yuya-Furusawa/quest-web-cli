import * as React from "react";

import { AuthContext } from "@context/auth";
import Spacer from "@components/atoms/Spacer";

const ProfilePage: React.FC = () => {
  const { user } = React.useContext(AuthContext);

  if (!user)
    return (
      <div className="flex justify-center w-full">
        <div className="w-2/5">Please LogIn</div>
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <div className="flex flex-col w-11/12 lg:w-2/5">
        <Spacer size="15px" />
        <div className="text-base font-bold">ユーザーネーム</div>
        <Spacer size="5px" />
        <div>{user.username}</div>
        <Spacer size="15px" />
        <div className="text-base font-bold">メールアドレス</div>
        <Spacer size="5px" />
        <div>{user.email}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
