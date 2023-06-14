import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import ChallengePage from "./ChallengePage";

const meta: Meta<typeof ChallengePage> = {
  title: "pages/ChallengePage",
  component: ChallengePage,
};
export default meta;

type Story = StoryObj<typeof ChallengePage>;

export const Default: Story = {
  render: () => <ChallengePage />,
};
