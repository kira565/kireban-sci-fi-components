import { Meta, StoryObj } from '@storybook/react';
import { AboutPanel } from '../../main';
import { AboutPanelProps } from './AboutPanel';

const meta = {
  title: 'Component AboutPanel story',
  component: AboutPanel
} satisfies Meta<AboutPanelProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headerText: 'SECTION NAME: ABOUT',
    width: '100%',
    height: '100%'
  }
};
