import { Meta, StoryObj } from '@storybook/react';
import { NavListProps } from './NavList';
import { NavList } from '../../main';
import About from '@assets/svg/icons/info.svg?react';
import Skills from '@assets/svg/icons/skills.svg?react';
import Exp from '@assets/svg/icons/experience.svg?react';
import Contacts from '@assets/svg/icons/contact.svg?react';

const meta = {
  title: 'NavList Example',
  component: NavList
} satisfies Meta<NavListProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    appear: 'left',
    selected: '/about',
    onSelect: (val) => console.log(val),
    children: [
      <NavList.NavOption
        title="ABOUT"
        value="/about"
        sciFiCode={0}
        key={'/about'}
        image={<About />}
      />,
      <NavList.NavOption
        title="SKILLS"
        value="/skills"
        sciFiCode={1}
        key={'/skills'}
        image={<Skills />}
      />,
      <NavList.NavOption
        title="EXPERIENCE"
        value="/experience"
        sciFiCode={2}
        key={'/experience'}
        image={<Exp />}
      />,
      <NavList.NavOption
        title="CONTACT"
        value="/contact"
        sciFiCode={3}
        key={'/contact'}
        image={<Contacts />}
      />
    ]
  }
};
