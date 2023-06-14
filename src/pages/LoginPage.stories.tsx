import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import LoginPage from "./LoginPage";

const meta: Meta<typeof LoginPage> = {
  title: "pages/LoginPage",
  component: LoginPage,
  decorators: [withRouter],
};
export default meta;

type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {
  render: () => <LoginPage />,
};
