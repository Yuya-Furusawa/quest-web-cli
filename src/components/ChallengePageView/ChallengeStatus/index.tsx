import * as React from "react";

import ChallengeCompleted from "./ChallengeCompleted";
import ChallengeProcessing from "./ChallengeProcessing";
import NotInValidAreaMessage from "./NotInValidAreaMessage";
import NotLoggedInMessage from "./NotLoggedInMessage";
import CheckInMessage from "./CheckInMessage";

type Props = {
  isLoggedIn: boolean;
  isInValidArea: boolean;
  isCheckedIn: boolean;
  isCompleted: boolean;
  onComplete: () => void;
  onClickCheckInButton: () => void;
  remainingTime: number;
};

const ChallengeStatus: React.FC<Props> = React.memo(
  ({
    isLoggedIn,
    isInValidArea,
    isCheckedIn,
    isCompleted,
    onComplete,
    onClickCheckInButton,
    remainingTime,
  }) => {
    // ログインしていない状態
    // ログインを促すメッセージを表示
    if (!isLoggedIn) return <NotLoggedInMessage />;

    // チャレンジが完了している状態
    // チャレンジ完了メッセージを表示
    if (isCompleted) return <ChallengeCompleted />;

    // チェックポイント外にいる状態
    // チェックポイント内への移動を促すメッセージを表示
    if (!isInValidArea) return <NotInValidAreaMessage />;

    // チェックポイント内にいてチェックインしていない状態
    // チェックインボタンを表示
    if (!isCheckedIn)
      return <CheckInMessage onClickCheckInButton={onClickCheckInButton} />;

    // チェックインしている状態
    // 残り時間を表示
    return (
      <ChallengeProcessing
        onComplete={onComplete}
        remainingTime={remainingTime}
      />
    );
  }
);

ChallengeStatus.displayName = "ChallengeStatus";

export default ChallengeStatus;
