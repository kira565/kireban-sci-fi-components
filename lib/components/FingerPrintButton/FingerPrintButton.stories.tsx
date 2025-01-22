import { Meta, StoryObj } from '@storybook/react';
import { FingerPrintButton, FingerPrintButtonProps } from './FingerPrintButton';

const meta = {
  title: 'FingerPrintButton Example',
  component: FingerPrintButton
} satisfies Meta<FingerPrintButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { width: 80, height: 80 } };
