import * as React from "react";
import { ReactComponent as CheckIcon } from "@assets/checkIcon.svg";

const ChallengeCompleted: React.FC = () => (
  <div className="flex flex-row gap-x-3 text-green-600">
    <CheckIcon style={{ width: "24px", height: "24px", fill: "#16A34A" }} />
    <div className="text-base">達成済</div>
  </div>
);

export default ChallengeCompleted;
