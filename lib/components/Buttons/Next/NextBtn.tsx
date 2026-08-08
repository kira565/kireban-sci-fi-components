import gsap from 'gsap';
import { createRef, useEffect, useRef } from 'react';

export interface NextBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  colourSchema?: string;
  augBorderWidth?: string;
  fontSize?: string;
  isAnimationPermanent?: boolean;
  ref?: React.RefObject<HTMLButtonElement | null>;
  backdropBlur?: boolean;
}

export const NextBtn: React.FC<NextBtnProps> = ({
  title,
  colourSchema = '#fa0',
  augBorderWidth = '2px',
  fontSize = '16px',
  isAnimationPermanent = false,
  style,
  ref = createRef(),
  backdropBlur,
  ...props
}) => {
  const timeline = useRef(
    gsap.timeline({
      repeat: -1,
      paused: true,
      defaults: { duration: 0.3, ease: 'power1.inOut' }
    })
  );

  useEffect(() => {
    if (!ref?.current) return;

    const tl = timeline.current;
    const q = gsap.utils.selector(ref?.current);

    tl.set(q('#arrow1'), { strokeOpacity: 0.2 });
    tl.set(q('#arrow2'), { strokeOpacity: 0.2 });
    tl.set(q('#arrow3'), { strokeOpacity: 0.2 });

    tl.to(q('#arrow3'), { strokeOpacity: 1 })
      .to(q('#arrow2'), { strokeOpacity: 1 }, '-=0.2')
      .to(q('#arrow1'), { strokeOpacity: 1 }, '-=0.2')
      .to(q('#arrow3'), { strokeOpacity: 0.2 }, '+=0.3')
      .to(q('#arrow2'), { strokeOpacity: 0.2 }, '-=0.2')
      .to(q('#arrow1'), { strokeOpacity: 0.2 }, '-=0.2');

    if (isAnimationPermanent) {
      timeline.current.play();
    }

    return () => {
      tl.kill();
    };
  }, [isAnimationPermanent, ref]);

  function onPlay() {
    if (!isAnimationPermanent) {
      timeline.current.play();
    }
    if (ref?.current) {
      gsap.killTweensOf(ref.current);

      gsap.to(ref.current, {
        filter: `
          brightness(1.1)
          drop-shadow(0 2px 6px ${colourSchema})
          drop-shadow(0 2px 10px ${colourSchema})
        `,
        boxShadow: `0 0 4px 2px ${colourSchema}`,
        duration: 0.8,
        ease: 'power2.out'
      });
    }
  }

  function onPause() {
    if (!isAnimationPermanent) {
      timeline.current.pause();
      timeline.current.revert();
    }
    if (ref?.current) {
      gsap.killTweensOf(ref.current); // остановка незавершённых glow-анимаций

      gsap.to(ref.current, {
        filter: 'none',
        boxShadow: 'none',
        duration: 0.3,
        ease: 'power2.in'
      });
    }
  }

  function onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (!props.onClick) return;
    if (ref?.current) {
      // Лёгкий скейл
      gsap.fromTo(
        ref.current,
        { scale: 1 },
        { scale: 1.1, duration: 0.1, yoyo: true, repeat: 1, ease: 'power1.out' }
      );
    }
    props.onClick(event);
  }

  return (
    <button
      {...props}
      ref={ref}
      onClick={onClick}
      onMouseEnter={onPlay}
      onMouseLeave={onPause}
      style={
        {
          '--aug-border-bg': colourSchema,
          '--aug-tl': '1.5rem',
          '--aug-l-offset': '1px',
          '--aug-border-all': augBorderWidth,
          '--aug-inlay-bg': backdropBlur ? '#000000' : undefined,
          '--aug-inlay-opacity': backdropBlur ? '0.1' : '0',
          '--aug-tr': '1.5rem',
          paddingLeft: '1.5rem',
          backdropFilter: backdropBlur ? 'blur(12px)' : undefined,
          fontSize,
          ...style
        } as React.CSSProperties
      }
      className="p-[0.5px] text-black dark:text-white font-[Oxanium] flex gap-1 items-center font-bold"
      data-augmented-ui="tl-clip border inlay">
      <span>{title}</span>
      <svg
        style={{ width: '2em', height: '2em', marginRight: '0.5em' }}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          id="arrow1"
          d="M10.5 5L13.5 8L10.5 11"
          stroke="#2AFFB2"
          strokeOpacity="1"
          strokeWidth="1.5"
        />
        <path
          id="arrow2"
          d="M6.5 5L9.5 8L6.5 11"
          stroke="#2AFFB2"
          strokeOpacity="0.6"
          strokeWidth="1.5"
        />
        <path
          id="arrow3"
          d="M2.5 5L5.5 8L2.5 11"
          stroke="#2AFFB2"
          strokeOpacity="0.3"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
};
