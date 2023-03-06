import * as React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

import type { Quest } from "../libs/type";
import { fetcher } from "../libs/fetcher";
import Spacer from "../components/Spacer";

const Quest: React.FC = () => {
  const { id } = useParams();
  const { data: quest } = useSWR<Quest, Error>(
    `http://localhost:3000/quests/${id}`,
    fetcher
  );

  if (!quest)
    return (
      <div className="flex justify-center w-full">
        <div className="w-2/5">Failed to load</div>
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex justify-center flex-col w-2/5">
        <Spacer size="25px" />
        <div className="text-xl font-bold leading-normal">{quest.title}</div>
        <Spacer size="10px" />
        <div className="text-sm text-gray-300 leading-tight">
          {quest.description}
        </div>
        <Spacer size="5px" />
        <div className="text-base font-bold">{quest.difficulty}</div>
        <Spacer size="5px" />
        <div className="flex gap-x-4">
          <div className="text-base">{`参加人数 : ${quest.num_participate}人`}</div>
          <div className="text-base">{`クリア人数 : ${quest.num_clear}人`}</div>
        </div>
      </div>
    </div>
  );
};

export default Quest;
