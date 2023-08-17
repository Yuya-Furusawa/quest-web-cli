import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import ParicipateButton from "./ParticipateButton";

const meta: Meta<typeof ParicipateButton> = {
  title: "components/Quest/ParticipateButton",
  component: ParicipateButton,
};
export default meta;

type Story = StoryObj<typeof ParicipateButton>;

export const Default: Story = {
  render: () => (
    <ParicipateButton
      user_id="aaa"
      quest_id="bbb"
      participateQuest={() => console.log("Participate!")}
    />
  ),
};
