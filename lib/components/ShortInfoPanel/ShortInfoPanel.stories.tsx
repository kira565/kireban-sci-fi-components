import { Meta, StoryObj } from '@storybook/react';
import { ShortInfoPanelProps } from './ShortInfoPanel';
import { ShortInfoPanel } from '@/main';
import icon from '@assets/svg/icons/profile.svg';

const meta = {
  title: 'Component ShortInfoPanel story',
  component: ShortInfoPanel
} satisfies Meta<ShortInfoPanelProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '250px',
    height: '55px',
    leftBlockContent: (
      <div className="rotate-90 text-[0.47rem] text-nowrap font-semibold p-[0.2rem]">UE- 1 TTL</div>
    ),
    children: (
      <div className="flex flex-col justify-between h-full">
        <div className="flex gap-1 h-full">
          <img className="h-[60%]" src={icon}></img>
          <div className="">
            <div className="text-2xl font-semibold h-[60%]">NAME</div>
            <div className="h-[40%]">KIRILL KAGDIN</div>
          </div>
        </div>
      </div>
    )
  }
};
