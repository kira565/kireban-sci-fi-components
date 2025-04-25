import { Meta, StoryObj } from '@storybook/react';
import { CircleIndicator, CircleIndicatorProps } from './CircleIndIcator';

const meta = {
  title: 'CircleIndicator Example',
  component: CircleIndicator
} satisfies Meta<CircleIndicatorProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Moscow, Kalashnikov Group',
    primaryColour: '#fa0',
    sm: true
  }
};
