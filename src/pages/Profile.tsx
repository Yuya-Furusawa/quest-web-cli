import * as React from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth";
import Spacer from "../components/Spacer";
import { Quest } from "../libs/type";

const Profile: React.FC = () => {
  const { user } = React.useContext(AuthContext);

  if (!user)
    return (
      <div className="flex justify-center w-full">
        <div className="w-2/5">Please LogIn</div>
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <div className="flex flex-col w-2/5">
        <Spacer size="15px" />
        <div className="text-base font-bold">ユーザーネーム</div>
        <Spacer size="5px" />
        <div>{user.username}</div>
        <Spacer size="15px" />
        <div className="text-base font-bold">メールアドレス</div>
        <Spacer size="5px" />
        <div>{user.email}</div>
        <Spacer size="15px" />
        <div className="text-base font-bold">参加中のクエスト</div>
        <Spacer size="5px" />
        <div className="flex flex-col gap-y-2">
          {user.participate_quest.map((quest) => (
            <QuestThinCard key={quest.id} quest={quest} />
          ))}
        </div>
      </div>
    </div>
  );
};

type QuestThinCardProps = {
  quest: Quest;
};

const QuestThinCard: React.FC<QuestThinCardProps> = ({ quest }) => (
  <Link to={`/quest/${quest.id}`}>
    <div className="flex flex-col w-full p-4 hover:shadow-lg rounded cursor-pointer border">
      <div className="text-xl font-bold leading-normal">{quest.title}</div>
      <Spacer size="10px" />
      <div className="text-sm text-gray-300 leading-tight">
        {quest.description}
      </div>
      <Spacer size="5px" />
      <div className="text-base font-bold">{quest.difficulty}</div>
    </div>
  </Link>
);

export default Profile;
