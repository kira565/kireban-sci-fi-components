import { Meta, StoryObj } from '@storybook/react';
import { CardProps } from './Card';
import { Card } from '../../main';

const meta = {
  title: 'Card Example',
  component: Card
} satisfies Meta<CardProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headBlockChildren: ['This is head block'],
    mainBlockChildren: ['This is main block'],
    width: '600px',
    height: '600px',
    borderColor: 'evaTextWarning',
    textColor: 'white',
    animated: true,
    icon: 'da'
  }
};
