import { Meta, StoryObj } from '@storybook/react';
import { EvaOptionListProps } from './EvaOptionList';
import { EvaOptionList } from '../../main';

const meta = {
  title: 'EvaOptionList Example',
  component: EvaOptionList
} satisfies Meta<EvaOptionListProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 'w-[400px]',
    options: [
      { title: 'WELCOME', clickHandler: () => {}, isActive: true, sciFiCode: 0 },
      { title: 'ABOUT', clickHandler: () => {}, isActive: false, sciFiCode: 1 }
    ]
  }
};
