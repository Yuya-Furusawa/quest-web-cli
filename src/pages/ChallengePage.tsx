import * as React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

import type { Challenge } from "../libs/type";
import { fetcher } from "../libs/fetcher";
import useStayDetection from "../libs/useStayDetection";
import Spacer from "../components/atoms/Spacer";
import { AuthContext } from "../context/auth";
import ChallengeStatus from "../components/Challenge/ChallengeStatus";

const ChallengePage: React.FC = () => {
  const { id } = useParams();
  const { data: challenge } = useSWR<Challenge, Error>(
    `http://localhost:3000/challenges/${id}`,
    fetcher
  );

  const { user } = React.useContext(AuthContext);

  // 対象地点の座標（デモ）
  const targetPosition = {
    latitude: 35.6895, // 緯度
    longitude: 139.6917, // 経度
  };

  const { isStaying, remainingTime } = useStayDetection(
    targetPosition,
    user ? true : false
  );

  // TODO: そのチャレンジを達成しているか否かを判定する
  const isCompleted = false;

  if (!challenge)
    return (
      <div className="flex justify-center w-full">
        <div className="w-2/5">Failed to load</div>
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex justify-center flex-col w-11/12 lg:w-2/5">
        <Spacer size="25px" />
        <div className="text-xl font-bold leading-normal">{challenge.name}</div>
        <Spacer size="10px" />
        <div className="text-sm text-gray-300 leading-tight">
          {challenge.description}
        </div>
        <Spacer size="30px" />
        {user && (
          <ChallengeStatus
            isCompleted={isCompleted}
            isStaying={isStaying}
            remainingTime={remainingTime}
          />
        )}
      </div>
    </div>
  );
};

export default ChallengePage;
