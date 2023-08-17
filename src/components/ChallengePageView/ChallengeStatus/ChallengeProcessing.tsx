import * as React from "react";
import { ReactComponent as LoadingIcon } from "@assets/loadingIcon.svg";

type Props = {
  remainingTimeInMillis: number;
  onComplete: () => void;
};

const ChallengeProcessing: React.FC<Props> = React.memo(
  ({ remainingTimeInMillis, onComplete }) => {
    const timeFormatted = Math.floor(remainingTimeInMillis / 1000);
    const seconds = String(timeFormatted % 60).padStart(2, "0");
    const minutes = String(Math.floor(timeFormatted / 60)).padStart(2, "0");

    React.useEffect(() => {
      if (remainingTimeInMillis <= 0) {
        onComplete();
      }
    }, [remainingTimeInMillis, onComplete]);

    return (
      <div className="flex justify-center cursor-pointer">
        <div className="flex flex-row gap-x-3 text-blue-600">
          <LoadingIcon
            style={{ width: "24px", height: "24px", fill: "#2563EB" }}
          />
          <div className="text-base">進行中</div>
          <div className="text-base">{`残り ${minutes}:${seconds}`}</div>
        </div>
      </div>
    );
  }
);

ChallengeProcessing.displayName = "ChallengeProcessing";

export default ChallengeProcessing;
