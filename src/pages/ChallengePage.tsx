import * as React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

import type { Challenge } from "@libs/type";
import { fetcher } from "@libs/fetcher";
import useStayDetection from "@libs/useStayDetection";
import { AuthContext } from "@context/auth";
import ChallengePageView from "@components/ChallengePageView";

const ChallengePage: React.FC = () => {
  const { id } = useParams();
  const { data: challenge } = useSWR(
    `${import.meta.env.VITE_API_BASE_URL}/challenges/${id}`,
    fetcher<Challenge>,
    { suspense: true }
  );
  const { data: completedChallengeIds } = useSWR(
    `${import.meta.env.VITE_API_BASE_URL}/me/completed_challenges`,
    fetcher<string[]>,
    { suspense: true }
  );

  const { user } = React.useContext(AuthContext);

  // 対象地点の座標
  const targetPosition = React.useMemo(
    () => ({
      latitude: challenge.latitude,
      longitude: challenge.longitude,
    }),
    [challenge]
  );

  const [isCheckedIn, setIsCheckedIn] = React.useState(false);
  const onClickCheckInButton = React.useCallback(() => {
    setIsCheckedIn(true);
  }, []);

  const [isCompleted, setIsCompleted] = React.useState(false);
  React.useEffect(() => {
    setIsCompleted(() => (id ? completedChallengeIds.includes(id) : false));
  }, [id, completedChallengeIds]);

  const onComplete = React.useCallback(() => {
    setIsCompleted(true);
  }, []);

  const { isInValidArea, remainingTimeInMillis } = useStayDetection(
    targetPosition,
    user !== null && !isCompleted // ログインしていてかつ、チャレンジ未達成の場合のみ位置情報の計算を行う
  );

  return (
    <ChallengePageView
      challenge={challenge}
      isCompleted={isCompleted}
      onComplete={onComplete}
      isLoggedIn={user ? true : false}
      isInValidArea={isInValidArea}
      isCheckedIn={isCheckedIn}
      onClickCheckInButton={onClickCheckInButton}
      remainingTimeInMillis={remainingTimeInMillis}
    />
  );
};

export default ChallengePage;
