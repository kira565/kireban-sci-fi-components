import { Meta, StoryObj } from '@storybook/react';
import { CircleIndicator, CircleIndicatorProps } from './CircleIndIcator';
import { CompanyGeneralInfo } from '@/components/CompanyGeneralInfo/CompanyGeneralInfo';
import Logo from '@assets/svg/logos/kk.svg?react';
import { useCallback, useState } from 'react';

const meta = {
  title: 'CircleIndicator Example',
  component: CircleIndicator
} satisfies Meta<CircleIndicatorProps>;

export default meta;

type Story = StoryObj<typeof meta>;

const Wrapper = (args: CircleIndicatorProps) => {
  const [isAnimationStarted, setStarted] = useState(false);

  const onComplete = useCallback(() => {
    setStarted(true);
  }, []);

  return (
    <CircleIndicator {...args} onAnimationComplete={onComplete}>
      <CompanyGeneralInfo
        companyLogo={<Logo />}
        logoHeight="45px"
        logoWidth="45px"
        colourSchema="#fa0"
        btnTitle="EXPLORE"
        onClick={() => {}}
        contentTop={<span className="font-[Oxanium]">KALASHNIKOV GROUP</span>}
        width="100%"
        height="80px"
        appearAnimation
        isAnimationStarted={isAnimationStarted}
      />
    </CircleIndicator>
  );
};

export const Default: Story = {
  render: (args) => <Wrapper {...args} />,
  args: {
    primaryColour: '#fa0',
    sm: true
  }
};
