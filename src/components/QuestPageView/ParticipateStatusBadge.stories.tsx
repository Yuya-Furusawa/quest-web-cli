import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import ParticipateStatusBadge from "./ParticipateStatusBadge";

const meta: Meta<typeof ParticipateStatusBadge> = {
  title: "components/QuestPageView/ParticipateStatusBadge",
  component: ParticipateStatusBadge,
};
export default meta;

type Story = StoryObj<typeof ParticipateStatusBadge>;

export const Default: Story = {
  render: () => (
    <ParticipateStatusBadge
      status="LogOut"
      user_id={null}
      quest_id="test-quest-id"
      participateQuest={() => {}}
    />
  ),
};
