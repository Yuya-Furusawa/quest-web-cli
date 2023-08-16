import * as React from "react";

import type { Quest } from "@libs/type";
import Spacer from "@components/atoms/Spacer";
import QuestCard from "./QuestCard";

type Props = {
  quests: Quest[];
};

const HomePageView: React.FC<Props> = ({ quests }) => (
  <div className="flex flex-col justify-center items-center w-full">
    <Spacer size="15px" />
    <div className="flex justify-center flex-col gap-y-4 w-11/12 lg:w-2/5">
      {quests.map((quest: Quest) => (
        <QuestCard key={quest.id} quest={quest} />
      ))}
    </div>
  </div>
);

export default HomePageView;
