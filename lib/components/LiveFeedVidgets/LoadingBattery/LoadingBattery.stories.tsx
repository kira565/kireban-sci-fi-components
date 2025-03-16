import { Meta, StoryObj } from '@storybook/react';
import { LoadingBattery, LoadingBatteryProps } from './LoadingBattery';

import { useState } from 'react';

const meta = {
  title: 'LoadingBattery Example',
  component: LoadingBattery
} satisfies Meta<LoadingBatteryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

const Wrapper = (props: LoadingBatteryProps) => {
  const [isMounted, setIsMounted] = useState(true);

  return isMounted ? (
    <LoadingBattery
      {...props}
      chargingCompleted={() => {
        console.log('⚡ Battery charging completed! Unmounting story...');
        setIsMounted(false); // ✅ This properly unmounts the component
      }}
    />
  ) : null;
};

export const Default: Story = {
  render: (args) => <Wrapper {...args} />, // ✅ Now properly returns the component
  args: {
    width: '40%',
    appear: 'left',
    needHideAfterComplete: true
  }
};
