import { Meta, StoryObj } from '@storybook/react';
import EvaOptionList, { EvaOptionListProps } from './EvaOptionList';

const meta = {
 title: "EvaOptionList Example",
 component: EvaOptionList,
} satisfies Meta<EvaOptionListProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {width: 'w-[400px]', options: [{title: 'WELCOME', clickHandler: () => {}, isActive: true, sciFiCode: 0}, {title: 'ABOUT', clickHandler: () => {}, isActive: false, sciFiCode: 1}],}};