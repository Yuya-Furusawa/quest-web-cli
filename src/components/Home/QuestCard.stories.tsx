import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import type { Quest } from "../../libs/type";
import { Difficulty } from "../../libs/type";
import QuestCard from "./QuestCard";

const meta: Meta<typeof QuestCard> = {
  title: "components/Home/QuestCard",
  component: QuestCard,
  decorators: [
    withRouter,
    (Story) => (
      <div className="w-2/5">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof QuestCard>;

export const Default: Story = {
  render: () => {
    const quest: Quest = {
      id: "LLi9PEyXneHRrm6Elny1I",
      title: "全国のスターバックスをめぐるスタンプラリー",
      description:
        "日本各地のスターバックスをめぐるスタンプラリーです。47都道府県のスターバックスに行くことができたらスタンプラリークリアです！",
      price: 0,
      difficulty: Difficulty.Normal,
      num_participate: 5846,
      num_clear: 78,
      challenges: [
        {
          id: "ApfViz6RSzURfznJg-EWN",
          name: "スターバックス渋谷センター街店に行く",
          description: "スターバックス渋谷センター街店で買い物をして滞在する",
          quest_id: "LLi9PEyXneHRrm6Elny1I",
          latitude: 35.6895,
          longitude: 139.6917,
        },
        {
          id: "wRo4pjKzOcRD6xJH8-25t",
          name: "STARBUCKS RESERVE ROASTERY TOKYOに行く",
          description: "STARBUCKS RESERVE ROASTERY TOKYOで買い物をして滞在する",
          quest_id: "LLi9PEyXneHRrm6Elny1I",
          latitude: 35.6895,
          longitude: 139.6917,
        },
      ],
    };
    return <QuestCard quest={quest} />;
  },
};
