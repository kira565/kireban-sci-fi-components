import { Meta, StoryObj } from '@storybook/react';
import EvaTilePanel, { EvaTilePanelProps } from './EvaTilePanel';

const meta = {
 title: "EvaTilePanel Example",
 component: EvaTilePanel,
} satisfies Meta<EvaTilePanelProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {tilesPerRowCount: 15, rowsCount: 15}};