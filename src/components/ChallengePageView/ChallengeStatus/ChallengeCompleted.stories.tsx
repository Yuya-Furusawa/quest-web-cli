import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import ChallengeCompleted from "./ChallengeCompleted";

const meta: Meta<typeof ChallengeCompleted> = {
  title: "components/Challenge/ChallengeStatus/ChallengeCompleted",
  component: ChallengeCompleted,
};
export default meta;

type Story = StoryObj<typeof ChallengeCompleted>;

export const Default: Story = {
  render: () => <ChallengeCompleted />,
};
