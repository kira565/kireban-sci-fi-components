import { Meta, StoryObj } from '@storybook/react';
import { ShortInfoPanelProps } from './ShortInfoPanel';
import { ShortInfoPanel } from '@/main';

const meta = {
  title: 'Component ShortInfoPanel story',
  component: ShortInfoPanel
} satisfies Meta<ShortInfoPanelProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { width: '250px', height: '55px', labelWidth: '95px' }
};
