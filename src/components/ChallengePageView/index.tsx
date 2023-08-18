import * as React from "react";
import type { Challenge } from "@libs/type";

import Spacer from "@components/atoms/Spacer";
import ChallengeStatus from "./ChallengeStatus";
import ChallengeStamp from "./ChallengeStamp";

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
      <ChallengeStamp challenge={challenge} isCompleted={isCompleted} />
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
