import { useEffect, useRef } from 'react';
import BorderT2 from '@assets/svg/modular_parts/bordert2.svg?react';
import gsap from 'gsap';
import { AppearDirection, appearFrom } from '@/utils';

export interface AvatarPanelProps {
  imageSrc?: string;
  colorSchema?: string;
  appear?: AppearDirection;
  image: React.ReactNode;
}

export const AvatarPanel: React.FC<AvatarPanelProps> = ({
  image,
  colorSchema = '#fa0',
  appear
}) => {
  const avatarContainer = useRef(null);
  const q1 = useRef(null);
  const q2 = useRef(null);
  const q3 = useRef(null);
  const borderT2Ref = useRef(null);
  const timeline = useRef(gsap.timeline({ paused: true, yoyo: true, repeat: -1, repeatDelay: 2 }));

  useEffect(() => {
    if (appear) {
      appearFrom(avatarContainer, appear);
    }
    timeline.current
      .to([q1.current, q2.current, q3.current], {
        duration: 1,
        stroke: '#fa0',
        ease: 'power2.in'
      })
      .to(
        [q1.current, q2.current],
        {
          duration: 1,
          fill: '#fa0',
          ease: 'power2.in'
        },
        '<'
      )
      .to([q1.current, q2.current, q3.current], {
        duration: 1,
        stroke: '#00ff00',
        ease: 'power2.in'
      })
      .to(
        [q1.current, q2.current, q3.current],
        {
          duration: 1,
          fill: '#00ff00',
          ease: 'power2.in'
        },
        '<'
      );

    timeline.current.play();

    const array = gsap.utils.toArray('#bordert-2 path', avatarContainer.current);
    gsap.fromTo(
      array,
      {
        opacity: 0
      },
      {
        opacity: 1,
        repeat: -1,
        repeatDelay: 2,
        stagger: {
          each: 0.1
        }
      }
    );
  }, [appear]);

  return (
    <div
      ref={avatarContainer}
      style={
        {
          '--aug-border-bg': colorSchema,
          '--aug-border-all': '0.8px',
          '--aug-tl': '12px',
          '--aug-br': '1.5rem'
        } as React.CSSProperties
      }
      className="inline-block dark:text-white relative"
      data-augmented-ui="tl-clip br-clip border">
      <div className={`absolute h-[15px] rotate-y-90 left-[8px]`} style={{ stroke: colorSchema }}>
        <BorderT2 ref={borderT2Ref} />
      </div>
      <div className="absolute right-[0.5px] top-[0.5px] w-[35px]">
        <svg
          className="h-full w-full"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            ref={q1}
            d="M5.5 3.5L8 2L10.5 3.5V6.5L8 8L5.5 6.5V3.5Z"
            fill="#FF4848"
            stroke="#FF4848"
          />
          <path ref={q2} d="M2 9.5L4.5 8L7 9.5V12.5L4.5 14L2 12.5V9.5Z" stroke="#FF4848" />
          <path ref={q3} d="M9 9.5L11.5 8L14 9.5V12.5L11.5 14L9 12.5V9.5Z" stroke="#FF4848" />
        </svg>
      </div>
      <div className="w-[35px] absolute right-2 bottom-2">
        <svg
          className="w-full h-full"
          viewBox="0 0 344 344"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M174.1 343.7H0.300293V0.399902H343.6V174.1L174.1 343.7ZM10.3003 333.7H169.9L333.6 170V10.3999H10.3003V333.7Z"
            fill={colorSchema}
          />
          <text
            className="font-[Oxanium]"
            x="50%"
            y="30%"
            fontSize={80}
            fill={colorSchema}
            textAnchor="middle"
            dominantBaseline="middle">
            UNIT-1
          </text>
          <text
            className="font-[Oxanium]"
            x="32%"
            y="60%"
            fontSize={80}
            fill={colorSchema}
            textAnchor="middle"
            dominantBaseline="middle">
            PIC
          </text>
        </svg>
      </div>
      {image}
    </div>
  );
};
