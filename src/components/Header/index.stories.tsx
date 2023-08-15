import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import type { User } from "../../libs/type";
import Header from ".";
import { AuthContext } from "../../context/auth";

const meta: Meta<typeof Header> = {
  title: "components/Header",
  component: Header,
  decorators: [withRouter],
};
export default meta;

type Story = StoryObj<typeof Header>;

/* eslint-disable @typescript-eslint/no-empty-function */

export const Logout: Story = {
  render: () => (
    <AuthContext.Provider
      value={{ user: null, login: () => {}, logout: () => {} }}
    >
      <Header />
    </AuthContext.Provider>
  ),
};

export const Login: Story = {
  render: () => {
    const user: User = {
      id: "",
      username: "Test User",
      email: "test@example.com",
      password: "password",
    };

    return (
      <AuthContext.Provider value={{ user, login: () => {}, logout: () => {} }}>
        <Header />
      </AuthContext.Provider>
    );
  },
};

/* eslint-disable @typescript-eslint/no-empty-function */
