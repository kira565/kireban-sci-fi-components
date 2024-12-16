import { Meta, StoryObj } from '@storybook/react';
import EvaProgressBar, {EvaProgressBarProps } from './EvaProgressBar';

const meta = {
 title: "EvaProgressBar Example",
 component: EvaProgressBar,
} satisfies Meta<EvaProgressBarProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {barsCount: 100, currentBarIndex: 75}};