import * as React from "react";
import { ReactComponent as CheckIcon } from "@assets/checkIcon.svg";
import Spacer from "../../atoms/Spacer";

const ChallengeCompleted: React.FC = () => (
  <div className="flex flex-colmun justify-center">
    <CheckIcon style={{ width: "24px", height: "24px", fill: "#16A34A" }} />
    <Spacer size="10px" />
    <div className="text-base text-green-500">チャレンジ達成済</div>
  </div>
);

export default ChallengeCompleted;
