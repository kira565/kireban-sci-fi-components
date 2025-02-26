import { Meta, StoryObj } from '@storybook/react';
import { AboutHeader, AboutHeaderProps } from './AboutHeader';

const meta = {
  title: 'Component AboutHeader story',
  component: AboutHeader
} satisfies Meta<AboutHeaderProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { text: '' }
};
