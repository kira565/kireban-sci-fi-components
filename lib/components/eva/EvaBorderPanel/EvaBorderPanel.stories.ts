// ./lib/components/navbar/navbar.stories.ts
import { Meta, StoryObj } from '@storybook/react';
import EvaBorderPanel, { EvaBorderPanelProps } from './EvaBorderPanel';

const meta = {
 title: "EvaBorderPanel Example",
 component: EvaBorderPanel,
} satisfies Meta<EvaBorderPanelProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {children : [], mode: 'warning'}};