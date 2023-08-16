import * as React from "react";
import useSWR from "swr";

import type { Quest, User } from "@libs/type";
import { fetcher } from "@libs/fetcher";
import { AuthContext } from "@context/auth";
import HomePageView from "@components/HomePageView";

const HomePage: React.FC = () => {
  const { data: quests } = useSWR(
    `${import.meta.env.VITE_API_BASE_URL}/quests`,
    fetcher<Quest[]>,
    { suspense: true }
  );

  const context = React.useContext(AuthContext);
  const { data: user } = useSWR<User, Error>(
    `${import.meta.env.VITE_API_BASE_URL}/user/auth`,
    fetcher
  );

  React.useEffect(() => {
    if (user) {
      context.login(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return <HomePageView quests={quests} />;
};

export default HomePage;
