import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import ChallengeNotStarted from "./ChallengeNotStarted";

const meta: Meta<typeof ChallengeNotStarted> = {
  title: "components/Challenge/ChallengeStatus/ChallengeNotStarted",
  component: ChallengeNotStarted,
};
export default meta;

type Story = StoryObj<typeof ChallengeNotStarted>;

export const Default: Story = {
  render: () => <ChallengeNotStarted />,
};
