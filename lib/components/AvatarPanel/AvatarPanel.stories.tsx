import { Meta, StoryObj } from '@storybook/react';
import { AvatarPanelProps } from './AvatarPanel';
import { AvatarPanel } from '@main';
import photo from '@assets/kireban.png';

const meta = {
  title: 'Component AvatarPanel story',
  component: AvatarPanel
} satisfies Meta<AvatarPanelProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: <img src={photo} width={'250px'} height={'250px'} alt="_avatar"></img>,
    appear: 'left'
  }
};
