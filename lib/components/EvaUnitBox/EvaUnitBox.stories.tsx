import { Meta, StoryObj } from '@storybook/react';
import EvaUnitBox, {EvaUnitBoxProps } from './EvaUnitBox';

const meta = {
 title: "EvaUnitBox Example",
 component: EvaUnitBox,
} satisfies Meta<EvaUnitBoxProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {args: { unitNumber: '01', subjectName: 'Kirill Kagdin' }};