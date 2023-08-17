import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import ChallengePageView from ".";

const meta: Meta<typeof ChallengePageView> = {
  title: "components/ChallengePageView",
  component: ChallengePageView,
};
export default meta;

type Story = StoryObj<typeof ChallengePageView>;

export const Default: Story = {
  render: () => {
    const challenge = {
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
    };
    return (
      <ChallengePageView
        challenge={challenge}
        isCompleted={false}
        onComplete={() => {}}
        isLoggedIn={true}
        isInValidArea={false}
        isCheckedIn={false}
        onClickCheckInButton={() => {}}
        remainingTimeInMillis={3000}
      />
    );
  },
};
