import * as React from "react";
import { Link } from "react-router-dom";

import { Challenge } from "@libs/type";
import Spacer from "@components/atoms/Spacer";

type Props = {
  challenge: Challenge;
  isCompleted: boolean;
};

const ChallengeCard: React.FC<Props> = React.memo(
  ({ challenge, isCompleted }) => (
    <Link to={`/challenge/${challenge.id}`}>
      <div className="flex flex-col w-full hover:opacity-60 cursor-pointer">
        <img
          src={
            isCompleted
              ? challenge.stamp_color_image_url
              : challenge.stamp_gray_image_url
          }
          alt={
            `${challenge.stamp_name}アイコン` +
            (isCompleted ? "（完了）" : "（未完了）")
          }
          className="aspect-square object-cover "
        />
        <Spacer size="8px" />
        <div className="text-base text-center font-bold leading-normal line-clamp-1">
          {challenge.stamp_name}
        </div>
      </div>
    </Link>
  )
);

ChallengeCard.displayName = "ChallengeCard";

export default ChallengeCard;
