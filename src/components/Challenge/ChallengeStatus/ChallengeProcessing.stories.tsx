import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import ChallengeProcessing from "./ChallengeProcessing";

const meta: Meta<typeof ChallengeProcessing> = {
  title: "components/Challenge/ChallengeStatus/ChallengeProcessing",
  component: ChallengeProcessing,
};
export default meta;

type Story = StoryObj<typeof ChallengeProcessing>;

export const Default: Story = {
  render: () => <ChallengeProcessing remainingTime={180000} />,
};
