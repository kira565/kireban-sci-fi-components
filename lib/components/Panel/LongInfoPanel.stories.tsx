import { Meta, StoryObj } from '@storybook/react';
import { PanelProps } from './Panel';
import { Panel } from '@main';
import { Fragment } from 'react/jsx-runtime';

const meta = {
  title: 'Component LongInfoPanel story',
  component: Panel
} satisfies Meta<PanelProps>;

export default meta;

type Story = StoryObj<typeof meta>;

const Wrapper = (props: PanelProps) => {
  return (
    <Fragment>
      <div className="h-[50%]">
        <Panel {...props}>
          <div className="flex flex-col justify-between h-full pl-2 pr-6">
            Greetings, dear voyager, and thank you for visiting my portfolio site. Here, I have
            poured my passion into complex visual designs and futuristic technologies, blending them
            with my favorite setting. My vision for the future aligns with the very essence of this
            portfolio—crafting the “interface of the future” and making a moonshot toward my dream.
            I am a passionate Frontend Developer with over five years of experience in modern web
            technologies. I thrive on complex data visualization, creating captivating,
            high-performance interfaces, and building complex web applications. Like many people, I
            have a big dream—to live and work in Japan. Since childhood, I have been fascinated by
            Japan’s rich culture, anime, unique mindset, and breathtaking nature. Now, I am
            determined to turn this dream into reality. To achieve this, I am intensively studying
            the Japanese language, aiming for JLPT N2-N3. Japan has brought immense joy into my
            life, and I am deeply committed to contributing to its society and technology industry.
            I genuinely care about the projects I work on and their positive impact on society—and
            perhaps even the world. My mission is to bridge the gap between people and cutting-edge
            technologies, making their lives easier through exceptional user experiences. I also
            aspire to help address global challenges, such as agricultural crisis and disaster
            prevention Greetings, dear voyager, and thank you for visiting my portfolio site. Here,
            I have poured my passion into complex visual designs and futuristic technologies,
            blending them with my favorite setting. My vision for the future aligns with the very
            essence of this portfolio—crafting the “interface of the future” and making a moonshot
            toward my dream. I am a passionate Frontend Developer with over five years of experience
            in modern web technologies. I thrive on complex data visualization, creating
            captivating, high-performance interfaces, and building complex web applications. Like
            many people, I have a big dream—to live and work in Japan. Since childhood, I have been
            fascinated by Japan’s rich culture, anime, unique mindset, and breathtaking nature. Now,
            I am determined to turn this dream into reality. To achieve this, I am intensively
            studying the Japanese language, aiming for JLPT N2-N3. Japan has brought immense joy
            into my life, and I am deeply committed to contributing to its society and technology
            industry. I genuinely care about the projects I work on and their positive impact on
            society—and perhaps even the world. My mission is to bridge the gap between people and
            cutting-edge technologies, making their lives easier through exceptional user
            experiences. I also aspire to help address global challenges, such as agricultural
            crisis and disaster prevention
          </div>
        </Panel>
      </div>
    </Fragment>
  );
};

export const Default: Story = {
  render: (args) => <Wrapper {...args} />,
  args: {
    leftBlockContent: (
      <div className="rotate-90 text-[0.47rem] text-nowrap font-semibold p-[0.2rem]">UE- 1 TTL</div>
    )
  }
};
