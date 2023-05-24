import * as React from "react";

import ChallengeCompleted from "./ChallengeCompleted";
import ChallengeProcessing from "./ChallengeProcessing";
import ChallengeNotStarted from "./ChallengeNotStarted";

type Props = {
  isCompleted: boolean;
  isStaying: boolean;
  remainingTime: number;
};

const ChallengeStatus: React.FC<Props> = React.memo(
  ({ isCompleted, isStaying, remainingTime }) => {
    if (isCompleted) return <ChallengeCompleted />;
    if (isStaying) return <ChallengeProcessing remainingTime={remainingTime} />;
    return <ChallengeNotStarted />;
  }
);

ChallengeStatus.displayName = "ChallengeStatus";

export default ChallengeStatus;
