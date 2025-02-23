import { Meta, StoryObj } from '@storybook/react';
import { Barcode, BarcodeProps } from './Barcode';

const meta = {
  title: 'Barcode Example',
  component: Barcode
} satisfies Meta<BarcodeProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { fill: '#fa0', width: '40%', appear: 'top' }
};
