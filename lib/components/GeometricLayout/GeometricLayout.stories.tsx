import { Meta, StoryObj } from '@storybook/react';
import { GeometricLayoutProps } from './GeometricLayout';
import { GeometricLayout } from '../../main';

const meta = {
  title: 'GeometricLayout Example',
  component: GeometricLayout,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<GeometricLayoutProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <div key={1}>
        Neon Genesis Evangelion (Japanese: 新世紀エヴァンゲリオン, Hepburn: Shinseiki Evangerion,
        lit.'New Century Evangelion' in Japanese and lit.'New Beginning Gospel' in Greek), also
        known as Evangelion or Eva, is a Japanese mecha anime television series produced by Gainax,
        animated by Tatsunoko, and directed by Hideaki Anno. It was broadcast on TV Tokyo from
        October 1995 to March 1996. The story is set fifteen years after a worldwide cataclysm in
        the futuristic fortified city of Tokyo-3. The protagonist is Shinji Ikari, a teenage boy
        recruited by his father Gendo to the mysterious organization Nerv. Shinji must pilot an
        Evangelion, a giant biomechanical mecha, to fight beings known as Angels. The series
        explores the experiences and emotions of the Evangelion pilots and Nerv members as they
        battle Angels. They are called upon to understand the ultimate cause of events and the
        motives behind human action. The series has been described as a deconstruction of the mecha
        genre, and features archetypal imagery derived from Shinto cosmology and mystical
        Judeo-Christian traditions, including Midrashic tales and Kabbalah.[7] The psychoanalytic
        accounts of human behavior put forward by Freud and Jung are prominently featured.[8][9]
        Neon Genesis Evangelion is widely considered one of the greatest anime series of all time.
        Its final two episodes drew controversy, as many viewers found the ending confusing and
        abstract. In 1997, Anno and Gainax released the feature film The End of Evangelion, serving
        as an alternate ending. A series of four films, Rebuild of Evangelion, retelling the events
        of the series with different plot elements and a new ending, were released between 2007 and
        2021. Film, manga, home video, and other products in the Evangelion franchise have achieved
        record sales in Japanese markets and strong sales in overseas markets, with related goods
        selling over ¥150 billion by 2007 and Evangelion pachinko machines generating ¥700 billion
        by 2015.
      </div>
    ]
  }
};
