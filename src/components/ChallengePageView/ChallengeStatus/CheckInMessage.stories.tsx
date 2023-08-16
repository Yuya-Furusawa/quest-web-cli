/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import CheckInMessage from "./CheckInMessage";

const meta: Meta<typeof CheckInMessage> = {
  title: "components/Challenge/ChallengeStatus/CheckInMessage",
  component: CheckInMessage,
};
export default meta;

type Story = StoryObj<typeof CheckInMessage>;

export const Default: Story = {
  render: () => <CheckInMessage onClickCheckInButton={() => {}} />,
};
