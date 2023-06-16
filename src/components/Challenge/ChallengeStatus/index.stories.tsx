import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import ChallengeStatus from ".";

const meta: Meta<typeof ChallengeStatus> = {
  title: "components/Challenge/ChallengeStatus",
  component: ChallengeStatus,
};
export default meta;

type Story = StoryObj<typeof ChallengeStatus>;

export const Completed: Story = {
  render: () => (
    <ChallengeStatus isCompleted={true} isStaying={false} remainingTime={0} />
  ),
};

export const Processing: Story = {
  render: () => (
    <ChallengeStatus
      isCompleted={false}
      isStaying={true}
      remainingTime={180000}
    />
  ),
};

export const NotStarted: Story = {
  render: () => (
    <ChallengeStatus isCompleted={false} isStaying={false} remainingTime={0} />
  ),
};
