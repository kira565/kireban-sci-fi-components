import { Meta, StoryObj } from '@storybook/react';
import { NextBtn, NextBtnProps } from './NextBtn';

const meta = {
  title: 'Component NextBtn story',
  component: NextBtn
} satisfies Meta<NextBtnProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colourSchema: '#f30',
    title: 'EXPLORE',
    backdropBlur: true,
    onClick: () => {}
  }
};
