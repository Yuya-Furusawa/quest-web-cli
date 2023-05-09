import * as React from "react";
import { ReactComponent as StopIcon } from "@assets/stopIcon.svg";

const ChallengeNotStarted: React.FC = () => (
  <div className="flex flex-row gap-x-3 text-gray-400">
    <StopIcon style={{ width: "24px", height: "24px", fill: "#9CA3AF" }} />
    <div className="text-base">未達成</div>
  </div>
);

export default ChallengeNotStarted;
