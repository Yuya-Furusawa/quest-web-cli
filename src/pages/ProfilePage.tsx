import * as React from "react";

import { AuthContext } from "@context/auth";
import ProfilePageView from "@components/ProfilePageView";

const ProfilePage: React.FC = () => {
  const { user } = React.useContext(AuthContext);

  return <ProfilePageView user={user} />;
};

export default ProfilePage;
