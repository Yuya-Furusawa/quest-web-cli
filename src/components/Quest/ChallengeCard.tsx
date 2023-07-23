import * as React from "react";
import { Link } from "react-router-dom";

import { Challenge } from "@libs/type";
import TokyoTowerColored from "@assets/tokyo-tower_color.png";
import Spacer from "@components/atoms/Spacer";

type Props = {
  challenge: Challenge;
};

const ChallengeCard: React.FC<Props> = React.memo(({ challenge }) => {

  // TODO: サーバーから返される完了ステータスに置き換える
  const isCompleted = React.useMemo(() => challenge.id[0].toUpperCase() <= 'M', [challenge.id]);

  return (
    <Link to={`/challenge/${challenge.id}`}>
      <div className="flex flex-col w-full hover:opacity-60 cursor-pointer">
        {/* TODO: 一旦静的画像で代替 */}
        <img
          src={TokyoTowerColored}
          alt="東京タワーのカラーアイコン"
          className={'aspect-square object-cover ' + (isCompleted ? '' : 'grayscale')}
        />
        <Spacer size="8px" />
        <div className="text-base text-center font-bold leading-normal line-clamp-1">{challenge.name}</div>
      </div>
    </Link>
  );
});

ChallengeCard.displayName = "ChallengeCard";

export default ChallengeCard;
