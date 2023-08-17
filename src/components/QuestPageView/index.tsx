import * as React from "react";

import type { Quest, Challenge } from "@libs/type";
import Spacer from "@components/atoms/Spacer";
import ChallengeCard from "./ChallengeCard";
import { ParticipateStatus } from "@pages/QuestPage";
import ParticipateStatusBadge from "./ParticipateStatusBadge";

type Props = {
  quest: Quest;
  status: ParticipateStatus;
  user_id: string | null;
  participateQuest: () => void;
};

const QuestPageView: React.FC<Props> = ({
  quest,
  status,
  user_id,
  participateQuest,
}) => (
  <div className="flex flex-col justify-center items-center w-full">
    <div className="flex justify-center flex-col w-11/12 lg:w-2/5">
      <Spacer size="25px" />
      <div className="flex flex-row justify-between items-center">
        <div className="text-xl font-bold leading-normal">{quest.title}</div>
        <ParticipateStatusBadge
          status={status}
          user_id={user_id ?? null}
          quest_id={quest.id}
          participateQuest={participateQuest}
        />
      </div>
      <Spacer size="10px" />
      <div className="text-sm text-gray-300 leading-tight">
        {quest.description}
      </div>
      <Spacer size="20px" />
      <div className="grid grid-cols-3 gap-4">
        {quest.challenges.map((challenge: Challenge) => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
            isCompleted={challenge.id[0].toUpperCase() <= "M"} // TODO: サーバーから返される完了ステータスに置き換える
          />
        ))}
      </div>
    </div>
  </div>
);

export default QuestPageView;
