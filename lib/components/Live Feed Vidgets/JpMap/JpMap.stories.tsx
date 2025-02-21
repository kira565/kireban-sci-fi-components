import { Meta, StoryObj } from '@storybook/react';
import { JpMap, JpMapProps } from './JpMap';

const meta = {
  title: 'Component JpMap story',
  component: JpMap
} satisfies Meta<JpMapProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '65%',
    height: '60%'
  }
};
