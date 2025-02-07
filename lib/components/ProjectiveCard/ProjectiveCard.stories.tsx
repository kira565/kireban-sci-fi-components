import { Meta, StoryObj } from '@storybook/react';
import { ProjectiveCard, ProjectiveCardProps } from './ProjectiveCard';

const meta = {
  title: 'ProjectiveCard Example',
  component: ProjectiveCard
} satisfies Meta<ProjectiveCardProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
