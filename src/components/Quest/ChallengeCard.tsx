import * as React from "react";
import { Link } from "react-router-dom";

import { Challenge } from "@libs/type";
import TokyoTowerColored from "@assets/tokyo-tower_color.png";
import Spacer from "@components/atoms/Spacer";

type Props = {
  challenge: Challenge;
  isCompleted: boolean;
};

const ChallengeCard: React.FC<Props> = React.memo(({ challenge, isCompleted }) => (
  <Link to={`/challenge/${challenge.id}`}>
    <div className="flex flex-col w-full hover:opacity-60 cursor-pointer">
      {/* TODO: 一旦静的画像で代替 */}
      <img
        src={TokyoTowerColored}
        alt={
          "東京タワーのチャレンジアイコン" +
          (isCompleted ? "（完了）" : "（未完了）")
        }
        className={
          "aspect-square object-cover " +
          (isCompleted ? "" : "grayscale")
        }
      />
      <Spacer size="8px" />
      <div className="text-base text-center font-bold leading-normal line-clamp-1">
        {challenge.name}
      </div>
    </div>
  </Link>
));

ChallengeCard.displayName = "ChallengeCard";

export default ChallengeCard;
