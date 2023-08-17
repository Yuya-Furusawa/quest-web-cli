import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ProfilePageView from ".";

const meta: Meta<typeof ProfilePageView> = {
  title: "components/ProfilePageView",
  component: ProfilePageView,
};
export default meta;

type Story = StoryObj<typeof ProfilePageView>;

export const Default: Story = {
  render: () => <ProfilePageView user={null} />,
};
