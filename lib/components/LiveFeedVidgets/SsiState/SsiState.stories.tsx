import { Meta, StoryObj } from '@storybook/react';
import { SsiState, SsiStateProps } from './SsiState';

const meta = {
  title: 'Component SsiState story',
  component: SsiState
} satisfies Meta<SsiStateProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '50%',
    appear: 'left'
  }
};
