import * as React from "react";

type StayDetectionResult = {
  isInValidArea: boolean;
  remainingTime: number;
};

type Coordinates = {
  latitude: number;
  longitude: number;
};

const useStayDetection = (
  targetPosition: Coordinates,
  shouldCalculate: boolean,
  isClickedCheckIn: boolean,
  timeThreshold = 10000, // 10秒間滞在したら「滞在した」と判定する
  accuracyThreshold = 50 // 50メートル以内の範囲にいたら「滞在した」と判定する、対象地点が大きい場合はここを大きくする場合がありそう
): StayDetectionResult => {
  const [isInValidArea, setIsInValidArea] = React.useState(false);
  const watchIdRef = React.useRef<number | null>(null);
  const initialTimeStampRef = React.useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = React.useState(timeThreshold);

  // 位置情報の取得と計算を行う
  React.useEffect(() => {
    // 必要ない場合は位置情報の取得・計算を行わない
    if (!shouldCalculate) {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
        watchIdRef.current = null;
        setIsInValidArea(false);
        initialTimeStampRef.current = null;
        setRemainingTime(timeThreshold);
      }
      return;
    }

    // 端末の位置が変わった場合に呼び出される関数
    const onPositionChanged = (position: GeolocationPosition) => {
      const { coords, timestamp } = position;
      if (initialTimeStampRef.current === null) {
        initialTimeStampRef.current = timestamp;
      } else {
        const distance = calculateDistance(targetPosition, coords);
        const elapsedTime = timestamp - initialTimeStampRef.current;

        // 範囲内にいるときの処理
        if (distance <= accuracyThreshold) {
          setIsInValidArea(true);
          if (elapsedTime >= timeThreshold) {
            if (watchIdRef.current) {
              navigator.geolocation.clearWatch(watchIdRef.current);
              watchIdRef.current = null;
            }
          }
          // 範囲外にいるときの処理
        } else {
          setIsInValidArea(false);
          initialTimeStampRef.current = null;
          setRemainingTime(timeThreshold);
        }
      }
    };

    // 位置情報取得でエラーが発生した場合のコールバック関数
    const onError = (error: GeolocationPositionError) => {
      console.error("位置情報の取得に失敗しました", error);
    };

    const options = {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    };

    const id = navigator.geolocation.watchPosition(
      onPositionChanged,
      onError,
      options
    );
    watchIdRef.current = id;

    // クリーンアップ関数
    return () => {
      if (watchIdRef.current) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
    };
  }, [targetPosition, shouldCalculate, timeThreshold, accuracyThreshold]);

  // 残り時間のカウントダウンを行う
  React.useEffect(() => {
    // Node.jsのタイマーモジュールを用いる
    let intervalId: NodeJS.Timeout | null = null;

    // カウントダウンを行うのは以下の条件をすべて満たすとき
    // 1: ユーザーが有効範囲内にいる（isInValidArea = true）
    // 2: ユーザーがログインしている（shouldCalculate = true）
    // 3: ユーザーがまだこのチャンレンジを達成していない（shouldCalculate = true）
    // 4: ユーザーがチェックインボタンを押したとき（isClickedCheckIn = true）
    if (isInValidArea && isClickedCheckIn && shouldCalculate) {
      intervalId = setInterval(() => {
        setRemainingTime((prevTime) => {
          const newTime = prevTime - 1000; // 1秒ずつ減らす
          return newTime;
        });
      }, 1000); // 1秒ごとに実行
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isInValidArea, isClickedCheckIn, shouldCalculate]);

  return {
    isInValidArea,
    remainingTime,
  };
};

// 2点間の距離を計算する（メートル単位）
const calculateDistance = (
  coords1: Coordinates, // 対象地点の緯度経度
  coords2: GeolocationCoordinates // 現地点の緯度経度（GeolocationAPIから取得）
) => {
  const lat1 = coords1.latitude;
  const lon1 = coords1.longitude;
  const lat2 = coords2.latitude;
  const lon2 = coords2.longitude;

  const R = 6371e3; // 地球の半径 (メートル単位)
  const lat1Rad = (lat1 * Math.PI) / 180;
  const lat2Rad = (lat2 * Math.PI) / 180;
  const deltaLat = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1Rad) *
      Math.cos(lat2Rad) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
};

export default useStayDetection;
