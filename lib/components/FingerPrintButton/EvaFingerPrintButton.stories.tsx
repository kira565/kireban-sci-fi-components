import { Meta, StoryObj } from '@storybook/react';
import { EvaFingerPrintButton, FingerPrintButtonProps } from './EvaFingerPrintButton';

const meta = {
  title: 'FingerPrintButton Example',
  component: EvaFingerPrintButton
} satisfies Meta<FingerPrintButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 150,
    height: 150
    // onCLick: () => {
    //   console.log('clicked');
    // }
  }
};
