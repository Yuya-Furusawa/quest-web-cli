import * as React from "react";
import { Link } from "react-router-dom";

import { Quest } from "@libs/type";
import Spacer from "@components/atoms/Spacer";

type QuestThinCardProps = {
  quest: Quest;
};

const QuestThinCard: React.FC<QuestThinCardProps> = React.memo(({ quest }) => (
  <Link to={`/quest/${quest.id}`}>
    <div className="flex flex-col w-full p-4 hover:shadow-lg rounded cursor-pointer border">
      <div className="text-lg font-medium leading-normal">{quest.title}</div>
      <Spacer size="5px" />
      <div className="text-sm text-gray-300 leading-tight">
        {quest.description}
      </div>
      <Spacer size="3px" />
      <div className="text-base font-medium">{quest.difficulty}</div>
    </div>
  </Link>
));

QuestThinCard.displayName = "QuestThinCard";

export default QuestThinCard;
