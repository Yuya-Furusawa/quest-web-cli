import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import NotLoggedInMessage from "./NotLoggedInMessage";

const meta: Meta<typeof NotLoggedInMessage> = {
  title: "components/ChallengePageView/ChallengeStatus/NotLoggedInMessage",
  component: NotLoggedInMessage,
  decorators: [withRouter],
};
export default meta;

type Story = StoryObj<typeof NotLoggedInMessage>;

export const Default: Story = {
  render: () => <NotLoggedInMessage />,
};
