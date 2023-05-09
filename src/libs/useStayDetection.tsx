import * as React from "react";

type StayDetectionResult = {
  isStaying: boolean;
  remainingTime: number;
};

type Coordinates = {
  latitude: number;
  longitude: number;
};

const useStayDetection = (
  targetPosition: Coordinates,
  isParticipated: boolean,
  timeThreshold = 300000, // 5分間滞在したら「滞在した」と判定する
  accuracyThreshold = 50 // 50メートル以内の範囲にいたら「滞在した」と判定する、対象地点が大きい場合はここを大きくする場合がありそう
): StayDetectionResult => {
  const [isStaying, setIsStaying] = React.useState(false);
  const [watchId, setWatchId] = React.useState<number | null>(null);
  const [initialTimeStamp, setInitialTimeStamp] = React.useState<number | null>(
    null
  );
  const [remainingTime, setRemainingTime] = React.useState(timeThreshold);

  React.useEffect(() => {
    // クエストに参加していない状態では位置情報の取得・計算を行わない
    if (!isParticipated) {
      return;
    }

    // 端末の位置が変わった場合に呼び出される関数
    const onPositionChanged = (position: GeolocationPosition) => {
      const { coords, timestamp } = position;
      if (!initialTimeStamp) {
        setInitialTimeStamp(timestamp);
      } else {
        const distance = calculateDistance(targetPosition, coords);
        const elapsedTime = timestamp - initialTimeStamp;

        if (distance <= accuracyThreshold && elapsedTime >= timeThreshold) {
          setIsStaying(true);
          if (watchId) {
            navigator.geolocation.clearWatch(watchId);
          }
        } else {
          setIsStaying(false);
          setRemainingTime(timeThreshold - elapsedTime);
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
    setWatchId(id);

    // クリーンアップ関数
    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [
    targetPosition,
    timeThreshold,
    accuracyThreshold,
    initialTimeStamp,
    watchId,
  ]);

  return {
    isStaying,
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
