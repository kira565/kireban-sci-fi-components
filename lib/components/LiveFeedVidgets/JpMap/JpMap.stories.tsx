import { Meta, StoryObj } from '@storybook/react';
import { JpMapProps } from './JpMap';
import { JpMap } from '@main';

const meta = {
  title: 'Component JpMap story',
  component: JpMap
} satisfies Meta<JpMapProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '40%'
  }
};
