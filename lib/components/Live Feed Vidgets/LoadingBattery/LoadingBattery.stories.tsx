import { Meta, StoryObj } from '@storybook/react';
import { LoadingBattery, LoadingBatteryProps } from './LoadingBattery';

const meta = {
  title: 'LoadingBattery Example',
  component: LoadingBattery
} satisfies Meta<LoadingBatteryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { width: '60%', appear: 'left' }
};
