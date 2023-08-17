import * as React from "react";

import ParticipateButton from "./ParticipateButton";
import { ParticipateStatus } from "@pages/QuestPage";

type Props = {
  status: ParticipateStatus;
  user_id: string | null;
  quest_id: string;
  participateQuest: () => void;
};

const ParticipateStatusBadge: React.FC<Props> = ({
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

ParticipateStatusBadge.displayName = "ParticipateStatusBadge";

export default ParticipateStatusBadge;
