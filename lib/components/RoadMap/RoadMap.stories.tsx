import { Meta, StoryObj } from '@storybook/react';
import { RoadMap, RoadMapProps } from './RoadMap';

const meta = {
  title: 'Component RoadMap story',
  component: RoadMap
} satisfies Meta<RoadMapProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: []
  }
};
