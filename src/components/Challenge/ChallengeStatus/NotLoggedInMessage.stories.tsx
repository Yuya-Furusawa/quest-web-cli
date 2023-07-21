import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import NotLoggedInMessage from "./NotLoggedInMessage";

const meta: Meta<typeof NotLoggedInMessage> = {
  title: "components/Challenge/ChallengeStatus/NotLoggedInMessage",
  component: NotLoggedInMessage,
};
export default meta;

type Story = StoryObj<typeof NotLoggedInMessage>;

export const Default: Story = {
  render: () => <NotLoggedInMessage />,
};
