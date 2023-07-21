import * as React from "react";
import { ReactComponent as LoadingIcon } from "@assets/loadingIcon.svg";

type Props = {
  remainingTime: number;
  onComplete: () => void;
};

const ChallengeProcessing: React.FC<Props> = React.memo(
  ({ remainingTime, onComplete }) => {
    const timeFormatted = Math.floor(remainingTime / 1000);
    const seconds = String(timeFormatted % 60).padStart(2, "0");
    const minutes = String(Math.floor(timeFormatted / 60)).padStart(2, "0");

    React.useEffect(() => {
      if (remainingTime <= 0) {
        onComplete();
      }
    }, [remainingTime, onComplete]);

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
