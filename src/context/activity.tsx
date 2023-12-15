import * as React from "react";
import useSWR from "swr";

import { fetcher } from "@libs/fetcher";
import { AuthContext } from "./auth";

type ActivityContextType = {
  participatedQuests: string[];
  participate: (questId: string) => void;
  completedChallenges: string[];
  complete: (challengeId: string) => void;
};

/* eslint-disable @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */

const inititalState: ActivityContextType = {
  participatedQuests: [],
  participate: (questId) => {},
  completedChallenges: [],
  complete: (challengeId) => {},
};

/* eslint-disable @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */

export const ActivityContext =
  React.createContext<ActivityContextType>(inititalState);

type Action = {
  type: "QUEST" | "CHALLENGE";
  payload: string[];
};

const activityReducer: React.Reducer<ActivityContextType, Action> = (
  state,
  action
) => {
  switch (action.type) {
    case "QUEST":
      return {
        ...state,
        participatedQuests: [...state.participatedQuests, ...action.payload],
      };
    case "CHALLENGE":
      return {
        ...state,
        completedChallenges: [...state.completedChallenges, ...action.payload],
      };
    default:
      return state;
  }
};

type ActivityContextProviderProps = {
  children: React.ReactNode;
};

export const ActivityContextProvider: React.FC<
  ActivityContextProviderProps
> = ({ children }) => {
  const [state, dispatch] = React.useReducer(activityReducer, inititalState);

  const { user } = React.useContext(AuthContext);

  const { data: fetchParticipatedQuests } = useSWR(
    user ? `${import.meta.env.VITE_API_BASE_URL}/me/participated_quests` : null,
    fetcher,
    {
      shouldRetryOnError: false,
    }
  );

  const { data: fetchCompletedChallenges } = useSWR(
    user
      ? `${import.meta.env.VITE_API_BASE_URL}/me/completed_challenges`
      : null,
    fetcher,
    {
      shouldRetryOnError: false,
    }
  );

  function participate(questId: string) {
    dispatch({ type: "QUEST", payload: [questId] });
  }

  function complete(challengeId: string) {
    dispatch({ type: "CHALLENGE", payload: [challengeId] });
  }

  React.useEffect(() => {
    if (fetchParticipatedQuests) {
      dispatch({ type: "QUEST", payload: fetchParticipatedQuests });
    }
  }, [fetchParticipatedQuests]);

  React.useEffect(() => {
    if (fetchCompletedChallenges) {
      dispatch({ type: "CHALLENGE", payload: fetchCompletedChallenges });
    }
  }, [fetchCompletedChallenges]);

  return (
    <ActivityContext.Provider
      value={{
        participatedQuests: state.participatedQuests,
        participate,
        completedChallenges: state.completedChallenges,
        complete,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};
