import * as React from "react";
import { Link } from "react-router-dom";

import type { Quest } from "../../libs/type";
import Spacer from "../atoms/Spacer";

type Props = {
  quest: Quest;
};

const QuestCard: React.FC<Props> = React.memo(({ quest }) => (
  <Link to={`/quest/${quest.id}`}>
    <div className="flex flex-col w-full p-4 hover:shadow-lg rounded cursor-pointer border">
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
  </Link>
));

QuestCard.displayName = "QuestCard";

export default QuestCard;
