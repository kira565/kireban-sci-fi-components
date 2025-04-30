import { Meta, StoryObj } from '@storybook/react';
import { CompanyGeneralInfo, CompanyGeneralInfoProps } from './CompanyGeneralInfo';
import Logo from '@assets/svg/logos/kk.svg?react';

const meta = {
  title: 'Component CompanyGeneralInfo story',
  component: CompanyGeneralInfo
} satisfies Meta<CompanyGeneralInfoProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '250px',
    height: '150px',
    colourSchema: '#fa0',
    logoHeight: '45px',
    logoWidth: '45px',
    companyLogo: <Logo />,
    onClick: () => {},
    contentTop: <span className="font-[Oxanium]">KALASHNIKOV GROUP</span>,
    btnTitle: 'EXPLORE',
    appearAnimation: true
  }
};
