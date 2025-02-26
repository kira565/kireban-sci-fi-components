import { Meta, StoryObj } from '@storybook/react';
import { AboutPanel, AboutPanelProps } from './AboutPanel';

const meta = {
  title: 'Component AboutPanel story',
  component: AboutPanel
} satisfies Meta<AboutPanelProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headerText: 'ABOUT',
    width: '50%',
    height: '100%'
  }
};
