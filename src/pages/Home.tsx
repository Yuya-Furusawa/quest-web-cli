import * as React from "react";
import useSWR from "swr";

import type { Quest, User } from "../libs/type";
import { fetcher } from "../libs/fetcher";
import QuestCard from "../components/QuestCard";
import Spacer from "../components/Spacer";
import { AuthContext } from "../context/auth";

const Home: React.FC = () => {
  const { data, error, isLoading } = useSWR<Quest[], Error>(
    "http://localhost:3000/quests",
    fetcher
  );

  const context = React.useContext(AuthContext);
  const { data: user } = useSWR<User, Error>(
    "http://localhost:3000/user/auth",
    fetcher
  );

  React.useEffect(() => {
    if (user) {
      context.login(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (error)
    return (
      <div className="flex justify-center w-full">
        <div className="w-2/5">Failed to load</div>
      </div>
    );

  if (isLoading)
    return (
      <div className="flex justify-center w-full">
        <div className="w-2/5">Loading...</div>
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Spacer size="15px" />
      <div className="flex justify-center flex-col w-2/5 gap-y-4">
        {data &&
          data.map((quest: Quest) => (
            <QuestCard key={quest.id} quest={quest} />
          ))}
      </div>
    </div>
  );
};

export default Home;
