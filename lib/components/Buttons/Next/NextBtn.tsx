import gsap from 'gsap';
import { useEffect } from 'react';

export interface NextBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  colourSchema?: string;
  augBorderWidth?: string;
  fontSize?: string;
}

export const NextBtn: React.FC<NextBtnProps> = ({
  text,
  colourSchema = '#fa0',
  augBorderWidth = '1.5px',
  fontSize = '16px',
  ...props
}) => {
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { duration: 0.3, ease: 'sine.inOut' }
    });

    tl.set('#arrow1', { strokeOpacity: 0.2 });
    tl.set('#arrow2', { strokeOpacity: 0.2 });
    tl.set('#arrow3', { strokeOpacity: 0.2 });

    tl.to('#arrow3', { strokeOpacity: 1 })
      .to('#arrow2', { strokeOpacity: 1 }, '-=0.1')
      .to('#arrow1', { strokeOpacity: 1 }, '-=0.1')
      .to('#arrow3', { strokeOpacity: 0.2 }, '+=0.2')
      .to('#arrow2', { strokeOpacity: 0.2 }, '-=0.1')
      .to('#arrow1', { strokeOpacity: 0.2 }, '-=0.1');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <button
      {...props}
      style={
        {
          '--aug-border-bg': colourSchema,
          '--aug-tl': '2.3rem',
          '--aug-l-offset': '1px',
          '--aug-border-all': augBorderWidth,
          '--aug-tr': '1.5rem',
          paddingLeft: '2.3rem',
          fontSize
        } as React.CSSProperties
      }
      className="p-1 text-black dark:text-white font-[Oxanium] flex gap-1 items-center"
      data-augmented-ui="tl-clip border">
      <span>{text}</span>
      <svg
        style={{ width: '1.9em', height: '1.9em' }}
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
          stroke-width="1.5"
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
