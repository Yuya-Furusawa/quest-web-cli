import * as React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

import type { Quest } from "@libs/type";
import { fetcher } from "@libs/fetcher";
import { AuthContext } from "@context/auth";
import QuestPageView from "@components/QuestPageView";

export type ParticipateStatus = "LogOut" | "NonParticipate" | "Participate";

const QuestPage: React.FC = () => {
  const { id } = useParams();
  const { data: quest } = useSWR(
    `${import.meta.env.VITE_API_BASE_URL}/quests/${id}`,
    fetcher<Quest>,
    { suspense: true }
  );

  const { user } = React.useContext(AuthContext);

  const { data: participatedQuests } = useSWR<string[], Error>(
    `${import.meta.env.VITE_API_BASE_URL}/me/participated_quests`,
    fetcher
  );
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
  const participateQuest = React.useCallback(() => {
    setStatus("Participate");
  }, []);

  return (
    <QuestPageView
      quest={quest}
      status={status}
      user_id={user?.id ?? null}
      participateQuest={participateQuest}
    />
  );
};

export default QuestPage;
