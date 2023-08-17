import * as React from "react";
import type { Challenge } from "@libs/type";

import Spacer from "@components/atoms/Spacer";
import ChallengeStatus from "./ChallengeStatus";

type Props = {
  challenge: Challenge;
  isCompleted: boolean;
  onComplete: () => void;
  isLoggedIn: boolean;
  isInValidArea: boolean;
  isCheckedIn: boolean;
  onClickCheckInButton: () => void;
  remainingTimeInMillis: number;
};

const ChallengePageView: React.FC<Props> = ({
  challenge,
  isCompleted,
  onComplete,
  isLoggedIn,
  isInValidArea,
  isCheckedIn,
  onClickCheckInButton,
  remainingTimeInMillis,
}) => (
  <div className="flex flex-col justify-center items-center w-full">
    <div className="flex justify-center flex-col w-11/12 lg:w-2/5">
      <Spacer size="25px" />
      <div className="text-xl font-bold leading-normal">{challenge.name}</div>
      <Spacer size="10px" />
      <div className="text-sm text-gray-300 leading-tight">
        {challenge.description}
      </div>
      <Spacer size="50px" />
      <div className="flex justify-center w-full">
        <div className="bg-sky-200 w-52 h-52 p-6 rounded-lg">
          {isCompleted ? (
            <img
              src={challenge.stamp_color_image_url}
              alt={`${challenge.stamp_name}のカラーアイコン`}
              className="w-40 h-40 object-cover"
            />
          ) : (
            <img
              src={challenge.stamp_gray_image_url}
              alt={`${challenge.stamp_name}のグレーアイコン`}
              className="w-40 h-40 object-cover"
            />
          )}
        </div>
      </div>
      <Spacer size="40px" />
      <p className="text-center italic text-sm text-gray-400">
        {challenge.flavor_text}
      </p>
      <Spacer size="50px" />
      <ChallengeStatus
        isLoggedIn={isLoggedIn}
        isInValidArea={isInValidArea}
        isCheckedIn={isCheckedIn}
        isCompleted={isCompleted}
        onComplete={onComplete}
        onClickCheckInButton={onClickCheckInButton}
        remainingTimeInMillis={remainingTimeInMillis}
      />
    </div>
  </div>
);

export default ChallengePageView;
