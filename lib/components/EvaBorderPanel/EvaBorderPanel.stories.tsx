import { Meta, StoryObj } from '@storybook/react';
import { EvaBorderPanelProps } from './EvaBorderPanel';
import { EvaBorderPanel } from '../../main';

const meta = {
 title: "EvaBorderPanel Example",
 component: EvaBorderPanel,
} satisfies Meta<EvaBorderPanelProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {children : ["Loading Profile..."], mode: 'warning', pulseAnimation: true}};