import * as React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

import type { Quest, Challenge } from "@libs/type";
import { fetcher } from "@libs/fetcher";
import { AuthContext } from "@context/auth";
import Spacer from "@components/atoms/Spacer";
import ChallengeCard from "@components/Quest/ChallengeCard";
import ParticipateButton from "@components/Quest/ParticipateButton";
import { ActivityContext } from "@context/activity";

const QuestPage: React.FC = () => {
  const { id } = useParams();
  const { data: quest } = useSWR<Quest, Error>(
    `${import.meta.env.VITE_API_BASE_URL}/quests/${id}`,
    fetcher
  );

  const { user } = React.useContext(AuthContext);
  const { participatedQuests, participate, completedChallenges } =
    React.useContext(ActivityContext);

  const [status, setStatus] = React.useState<ParticipateStatus>("LogOut");
  React.useEffect(() => {
    if (!participatedQuests) {
      setStatus("LogOut");
    } else {
      const status =
        participatedQuests.findIndex((questId) => questId === id) > -1
          ? "Participate"
          : "NonParticipate";
      setStatus(status);
    }
  }, [user, id, participatedQuests]);

  const postQuestParticipation = async (id: string, userId: string) => {
    try {
      const url = `${
        import.meta.env.VITE_API_BASE_URL
      }/quests/${id}/participate`;
      const data = {
        user_id: userId,
      };
      fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const participateQuest = React.useCallback(() => {
    setStatus("Participate");
    if (id && user) {
      postQuestParticipation(id, user.id);
      participate(id);
    }
  }, [id, user, participate]);

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
        <Spacer size="20px" />
        <div className="grid grid-cols-3 gap-4">
          {quest.challenges.map((challenge: Challenge) => (
            <ChallengeCard
              key={challenge.id}
              challenge={challenge}
              isCompleted={completedChallenges.includes(challenge.id)}
            />
          ))}
        </div>
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
