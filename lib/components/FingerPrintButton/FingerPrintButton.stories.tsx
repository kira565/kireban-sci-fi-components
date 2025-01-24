import { Meta, StoryObj } from '@storybook/react';
import { FingerPrintButton } from '../../main';
import { FingerPrintButtonProps } from './FingerPrintButton';

const meta = {
  title: 'FingerPrintButton Example',
  component: FingerPrintButton
} satisfies Meta<FingerPrintButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 150,
    height: 150,
    onCLick: () => {
      console.log('clicked');
    }
  }
};
