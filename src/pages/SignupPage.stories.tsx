import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import SignupPage from "./SignupPage";

const meta: Meta<typeof SignupPage> = {
  title: "pages/SignupPage",
  component: SignupPage,
  decorators: [withRouter],
};
export default meta;

type Story = StoryObj<typeof SignupPage>;

export const Default: Story = {
  render: () => <SignupPage />,
};
