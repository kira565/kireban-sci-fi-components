import { Meta, StoryObj } from '@storybook/react';
import { Circle } from '../../main';
import { CircleProps } from './Circle';

const meta = {
  title: 'Circle Example',
  component: Circle
} satisfies Meta<CircleProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
