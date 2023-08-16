/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import ChallengeStatus from ".";

const meta: Meta<typeof ChallengeStatus> = {
  title: "components/Challenge/ChallengeStatus",
  component: ChallengeStatus,
  decorators: [withRouter],
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
      onComplete={() => {}}
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
      onComplete={() => {}}
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
      onComplete={() => {}}
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
      onComplete={() => {}}
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
      onComplete={() => {}}
      onClickCheckInButton={() => {}}
      remainingTime={5000}
    />
  ),
};
