import * as React from "react";

type Props = {
  user_id: string;
  quest_id: string;
  participateQuest: () => void;
};

const ParticipateButton: React.FC<Props> = React.memo(
  ({ user_id, quest_id, participateQuest }) => {
    const data = {
      user_id,
      quest_id,
    };

    const onClick = async () => {
      await fetch("http://localhost:3000/participate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
      participateQuest();
    };

    return (
      <div
        onClick={onClick}
        className="p-1 bg-sky-600 text-white rounded cursor-pointer"
      >
        参加する
      </div>
    );
  }
);

ParticipateButton.displayName = "ParticipateButton";

export default ParticipateButton;
