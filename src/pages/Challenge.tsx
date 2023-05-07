import * as React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

import type { Challenge } from "../libs/type";
import { fetcher } from "../libs/fetcher";
import Spacer from "../components/atoms/Spacer";

const Challenge: React.FC = () => {
  const { id } = useParams();
  const { data: challenge } = useSWR<Challenge, Error>(
    `http://localhost:3000/challenges/${id}`,
    fetcher
  );

  if (!challenge)
    return (
      <div className="flex justify-center w-full">
        <div className="w-2/5">Failed to load</div>
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex justify-center flex-col w-2/5">
        <Spacer size="25px" />
        <div className="text-xl font-bold leading-normal">{challenge.name}</div>
        <Spacer size="10px" />
        <div className="text-sm text-gray-300 leading-tight">
          {challenge.description}
        </div>
      </div>
    </div>
  );
};

export default Challenge;
