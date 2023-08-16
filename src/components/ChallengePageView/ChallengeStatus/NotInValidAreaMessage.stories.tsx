import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import NotInValidAreaMessage from "./NotInValidAreaMessage";

const meta: Meta<typeof NotInValidAreaMessage> = {
  title: "components/ChallengePageView/ChallengeStatus/NotInValidAreaMessage",
  component: NotInValidAreaMessage,
};
export default meta;

type Story = StoryObj<typeof NotInValidAreaMessage>;

export const Default: Story = {
  render: () => <NotInValidAreaMessage />,
};
