/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import ChallengeStatus from ".";

const meta: Meta<typeof ChallengeStatus> = {
  title: "components/Challenge/ChallengeStatus",
  component: ChallengeStatus,
};
export default meta;

type Story = StoryObj<typeof ChallengeStatus>;

export const NotLoggedIn: Story = {
  render: () => (
    <ChallengeStatus
      isLoggedIn={false}
      isInValidArea={false}
      isCheckedIn={false}
      isCompleted={false}
      onClickCheckInButton={() => {}}
      remainingTime={0}
    />
  ),
};

export const Completed: Story = {
  render: () => (
    <ChallengeStatus
      isLoggedIn={true}
      isInValidArea={false}
      isCheckedIn={false}
      isCompleted={true}
      onClickCheckInButton={() => {}}
      remainingTime={0}
    />
  ),
};

export const NotInValidArea: Story = {
  render: () => (
    <ChallengeStatus
      isLoggedIn={true}
      isInValidArea={false}
      isCheckedIn={false}
      isCompleted={false}
      onClickCheckInButton={() => {}}
      remainingTime={0}
    />
  ),
};

export const NotCheckIn: Story = {
  render: () => (
    <ChallengeStatus
      isLoggedIn={true}
      isInValidArea={true}
      isCheckedIn={false}
      isCompleted={false}
      onClickCheckInButton={() => {}}
      remainingTime={0}
    />
  ),
};

export const ChallengeProcessing: Story = {
  render: () => (
    <ChallengeStatus
      isLoggedIn={true}
      isInValidArea={true}
      isCheckedIn={true}
      isCompleted={false}
      onClickCheckInButton={() => {}}
      remainingTime={5000}
    />
  ),
};
