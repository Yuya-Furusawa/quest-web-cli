import * as React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

import type { Quest, Challenge } from "@libs/type";
import { fetcher } from "@libs/fetcher";
import { AuthContext } from "@context/auth";
import Spacer from "@components/atoms/Spacer";
import ChallengeCard from "@components/Quest/ChallengeCard";
import ParticipateButton from "@components/Quest/ParticipateButton";

const QuestPage: React.FC = () => {
  const { id } = useParams();
  const { data: quest } = useSWR<Quest, Error>(
    `${import.meta.env.VITE_API_BASE_URL}/quests/${id}`,
    fetcher
  );

  const { user } = React.useContext(AuthContext);

  const [status, setStatus] = React.useState<ParticipateStatus>("LogOut");
  React.useEffect(() => {
    if (!user) {
      setStatus("LogOut");
    } else {
      const status =
        user.participate_quest.findIndex((quest) => quest.id === id) > -1
          ? "Participate"
          : "NonParticipate";
      setStatus(status);
    }
  }, [user, id]);
  const participateQuest = React.useCallback(() => {
    setStatus("Participate");
  }, []);

  if (!quest)
    return (
      <div className="flex justify-center w-full">
        <div className="w-2/5">Failed to load</div>
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex justify-center flex-col w-11/12 lg:w-2/5">
        <Spacer size="25px" />
        <div className="flex flex-row justify-between items-center">
          <div className="text-xl font-bold leading-normal">{quest.title}</div>
          <ParticipateStatusBatch
            status={status}
            user_id={user?.id ?? null}
            quest_id={id ?? null}
            participateQuest={participateQuest}
          />
        </div>
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
        <Spacer size="10px" />
        <Spacer size="20px" />
        {quest.challenges.map((challenge: Challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
};

type ParticipateStatus = "LogOut" | "NonParticipate" | "Participate";

type ParticipateStatusBatchProps = {
  status: ParticipateStatus;
  user_id: string | null;
  quest_id: string | null;
  participateQuest: () => void;
};

const ParticipateStatusBatch: React.FC<ParticipateStatusBatchProps> = ({
  status,
  user_id,
  quest_id,
  participateQuest,
}) => {
  switch (status) {
    case "LogOut":
      return <></>;
    case "Participate":
      return (
        <div className="text-emerald-500 p-1 border rounded border-emerald-500 cursor-default">
          参加中
        </div>
      );
    case "NonParticipate":
      if (user_id !== null && quest_id !== null)
        return (
          <ParticipateButton
            user_id={user_id}
            quest_id={quest_id}
            participateQuest={participateQuest}
          />
        );
      else return <></>;
  }
};

ParticipateStatusBatch.displayName = "ParticipateStatusBatch";

export default QuestPage;
