import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import type { User } from "../libs/type";
import { AuthContext } from "../context/auth";
import ProfilePage from "./ProfilePage";

const meta: Meta<typeof ProfilePage> = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  decorators: [withRouter],
};
export default meta;

type Story = StoryObj<typeof ProfilePage>;

/* eslint-disable @typescript-eslint/no-empty-function */

export const Default: Story = {
  render: () => {
    const user: User = {
      id: "",
      username: "Test User",
      email: "test@example.com",
      password: "password",
    };
    return (
      <AuthContext.Provider value={{ user, login: () => {}, logout: () => {} }}>
        <ProfilePage />
      </AuthContext.Provider>
    );
  },
};

/* eslint-disable @typescript-eslint/no-empty-function */
