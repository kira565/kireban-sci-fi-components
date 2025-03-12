import { Meta, StoryObj } from '@storybook/react';
import { AboutPanel, AboutPanelProps } from './AboutPanel';

const meta = {
  title: 'Component AboutPanel story',
  component: AboutPanel
} satisfies Meta<AboutPanelProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headerText: 'SECTION NAME: ABOUT',
    width: '100%',
    height: '100%',
    children: (
      <div className="mt-4">
        {' '}
        Frontend Developer with over 5 years of experience in web technologies. Specialized in
        building high-performance, complex web applications, optimizing system performance, and
        integrating third-party APIs. Passionate about data visualization, technology, and
        problem-solving. Currently studying Japanese (aiming for JLPT N3/N2) with a strong
        commitment to working in Japan long-term and contributing to its technology industry and
        society.
      </div>
    )
  }
};
