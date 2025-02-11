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
    children: '08-P6 TRUSS 01/02 SOLAR ARRAYS'
  }
};
