import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import type { Challenge } from "../../libs/type";
import ChallengeCard from "./ChallengeCard";

const meta: Meta<typeof ChallengeCard> = {
  title: "components/Quest/ChallengeCard",
  component: ChallengeCard,
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

type Story = StoryObj<typeof ChallengeCard>;

const challenge: Challenge = {
  id: "ApfViz6RSzURfznJg-EWN",
  name: "スターバックス渋谷センター街店に行く",
  description: "スターバックス渋谷センター街店で買い物をして滞在する",
  quest_id: "LLi9PEyXneHRrm6Elny1I",
  latitude: 35.6895,
  longitude: 139.6917,
};

export const Completed: Story = {
  render: () => <ChallengeCard challenge={challenge} isCompleted={true} />,
};

export const NotCompleted: Story = {
  render: () => <ChallengeCard challenge={challenge} isCompleted={false} />,
};
