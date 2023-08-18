import * as React from "react";

import type { Challenge } from "@libs/type";
import Spacer from "@components/atoms/Spacer";

type Props = {
  challenge: Challenge;
  isCompleted: boolean;
};

const ChallengeStamp: React.FC<Props> = ({ challenge, isCompleted }) => (
  <>
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
    <p className="text-center italic text-sm text-gray-400">
      {challenge.flavor_text}
    </p>
  </>
);

export default ChallengeStamp;
