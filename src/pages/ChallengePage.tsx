import * as React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

import type { Challenge } from "@libs/type";
import { fetcher } from "@libs/fetcher";
import useStayDetection from "@libs/useStayDetection";
import Spacer from "@components/atoms/Spacer";
import { AuthContext } from "@context/auth";
import { ActivityContext } from "@context/activity";
import ChallengeStatus from "@components/Challenge/ChallengeStatus";

const ChallengePage: React.FC = () => {
  const { id } = useParams();
  const { data: challenge } = useSWR<Challenge, Error>(
    `${import.meta.env.VITE_API_BASE_URL}/challenges/${id}`,
    fetcher
  );

  const { user } = React.useContext(AuthContext);
  const { completedChallenges, complete } = React.useContext(ActivityContext);

  // 対象地点の座標
  const targetPosition = React.useMemo(
    () => ({
      latitude: challenge?.latitude ?? 0, // 緯度
      longitude: challenge?.longitude ?? 0, // 経度
    }),
    [challenge]
  );

  const [isCheckedIn, setIsCheckedIn] = React.useState(false);
  const onClickCheckInButton = React.useCallback(() => {
    setIsCheckedIn(true);
  }, []);

  const postChallengeCompletion = async (id: string, userId: string) => {
    try {
      const url = `${
        import.meta.env.VITE_API_BASE_URL
      }/challenges/${id}/complete`;
      const data = {
        user_id: userId,
      };
      await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const [isCompleted, setIsCompleted] = React.useState(false);
  const onComplete = React.useCallback(() => {
    setIsCompleted(true);
    if (id && user) {
      postChallengeCompletion(id, user.id);
      complete(id);
    }
  }, [id, user, complete]);
  React.useEffect(() => {
    if (id && completedChallenges.includes(id)) {
      setIsCompleted(true);
    }
  }, [completedChallenges, id]);

  const { isInValidArea, remainingTime } = useStayDetection(
    targetPosition,
    user !== null && !isCompleted, // ログインしていてかつ、チャレンジ未達成の場合のみ位置情報の計算を行う
    isCheckedIn
  );

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
        {isCompleted && (
          <p className="text-center italic text-sm text-gray-400">
            {challenge.flavor_text}
          </p>
        )}
        <Spacer size="50px" />
        <ChallengeStatus
          isLoggedIn={user ? true : false}
          isInValidArea={isInValidArea}
          isCheckedIn={isCheckedIn}
          isCompleted={isCompleted}
          onComplete={onComplete}
          onClickCheckInButton={onClickCheckInButton}
          remainingTime={remainingTime}
        />
      </div>
    </div>
  );
};

export default ChallengePage;
