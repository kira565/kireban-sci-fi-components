import { Meta, StoryObj } from '@storybook/react';
import { ExperienceBar, ExperienceBarProps } from './ExperienceBar';

const meta = {
  title: 'Component ExperienceBar story',
  component: ExperienceBar
} satisfies Meta<ExperienceBarProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
