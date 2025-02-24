import { Meta, StoryObj } from '@storybook/react';
import { GeospatialInfoPanel, GeospatialInfoPanelProps } from './GeospatialInfoPanel';

const meta = {
  title: 'Component GeospatialInfoPanel story',
  component: GeospatialInfoPanel
} satisfies Meta<GeospatialInfoPanelProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { width: '30%' }
};
