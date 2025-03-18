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
    width: '250px',
    mobileView: true,
    appear: 'left',
    options: [
      { title: 'ABOUT', clickHandler: () => {}, isActive: true, sciFiCode: 0 },
      { title: 'SKILLS', clickHandler: () => {}, isActive: false, sciFiCode: 1 },
      { title: 'EXPERIENCE', clickHandler: () => {}, isActive: false, sciFiCode: 2 },
      { title: 'CONTACT', clickHandler: () => {}, isActive: false, sciFiCode: 3 }
    ]
  }
};
