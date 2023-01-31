import * as React from "react";
import useSWR from "swr";

import type { Quest } from "./libs/type";
import { fetcher } from "./libs/fetcher";
import Header from "./components/Header";
import QuestCard from "./components/QuestCard";
import Spacer from "./components/Spacer";

function App() {
  const { data, error, isLoading } = useSWR<Quest[], Error>(
    "http://localhost:3000/quests",
    fetcher
  );

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
    <>
      <Header />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex justify-center flex-col w-2/5">
          {data &&
            data.map((quest: Quest) => (
              <>
                <Spacer size="15px" />
                <QuestCard quest={quest} />
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
