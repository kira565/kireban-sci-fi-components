import { Meta, StoryObj } from '@storybook/react';
import { ButtonFinger, ButtonFingerProps } from './ButtonFinger';
import { fn } from '@storybook/test';

const meta = {
  title: 'ButtonFinger Example',
  component: ButtonFinger
} satisfies Meta<ButtonFingerProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '150px',
    height: '150px',
    onClick: fn(),
    hideAfterClick: true
  }
};
