import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import QuestPage from "./QuestPage";

const meta: Meta<typeof QuestPage> = {
  title: "pages/QuestPage",
  component: QuestPage,
};
export default meta;

type Story = StoryObj<typeof QuestPage>;

export const Default: Story = {
  render: () => <QuestPage />,
};
