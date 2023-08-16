import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import HomePageView from ".";

const meta: Meta<typeof HomePageView> = {
  title: "components/HomePageView",
  component: HomePageView,
};
export default meta;

type Story = StoryObj<typeof HomePageView>;

export const Default: Story = {
  render: () => {
    const quests = [
      {
        id: "test-quest-1",
        title: "Test Quest 1",
        description: "This is a test quest 1.",
        challenges: [
          {
            id: "test-challenge",
            name: "Test Challenge",
            description: "This is a test challenge",
            quest_id: "test-quest",
            latitude: 35.6895,
            longitude: 139.6917,
            stamp_name: "Test Stamp",
            stamp_color_image_url:
              "https://res.cloudinary.com/dbbtfr2i5/image/upload/v1692109657/tokyo-tower_color_bofufc.png",
            stamp_gray_image_url:
              "https://res.cloudinary.com/dbbtfr2i5/image/upload/v1692109656/tokyo-tower_monoclo_jxf7fb.png",
            flavor_text: "test-text",
          },
        ],
      },
      {
        id: "test-quest-2",
        title: "Test Quest 2",
        description: "This is a test quest 2.",
        challenges: [
          {
            id: "test-challenge",
            name: "Test Challenge",
            description: "This is a test challenge",
            quest_id: "test-quest",
            latitude: 35.6895,
            longitude: 139.6917,
            stamp_name: "Test Stamp",
            stamp_color_image_url:
              "https://res.cloudinary.com/dbbtfr2i5/image/upload/v1692109657/tokyo-tower_color_bofufc.png",
            stamp_gray_image_url:
              "https://res.cloudinary.com/dbbtfr2i5/image/upload/v1692109656/tokyo-tower_monoclo_jxf7fb.png",
            flavor_text: "test-text",
          },
        ],
      },
    ];
    return <HomePageView quests={quests} />;
  },
};
