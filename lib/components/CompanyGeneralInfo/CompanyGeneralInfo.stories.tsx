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
    width: '70px',
    height: '50px',
    colorSchema: '#fa0',
    companyLogo: <Logo />
  }
};
