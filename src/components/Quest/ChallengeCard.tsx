import * as React from "react";
import { Link } from "react-router-dom";

import { Challenge } from "@libs/type";
import Spacer from "@components/atoms/Spacer";

type Props = {
  challenge: Challenge;
};

const ChallengeCard: React.FC<Props> = React.memo(({ challenge }) => (
  <Link to={`/challenge/${challenge.id}`}>
    <div className="flex flex-col w-full p-4 hover:shadow-lg rounded cursor-pointer border">
      <div className="text-xl font-bold leading-normal">{challenge.name}</div>
      <Spacer size="10px" />
      <div className="text-sm text-gray-300 leading-tight">
        {challenge.description}
      </div>
    </div>
  </Link>
));

ChallengeCard.displayName = "ChallengeCard";

export default ChallengeCard;
