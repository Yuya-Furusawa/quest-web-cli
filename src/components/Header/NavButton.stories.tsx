import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import NavButton from "./NavButton";

const meta: Meta<typeof NavButton> = {
  title: "components/Header/NavButton",
  component: NavButton,
  decorators: [
    withRouter,
    (Story) => (
      <div className="w-20">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof NavButton>;

export const Login: Story = {
  render: () => <NavButton text="Login" primary={true} dest="/login" />,
};

export const Logout: Story = {
  render: () => <NavButton text="Logout" primary={false} dest="/logout" />,
};
