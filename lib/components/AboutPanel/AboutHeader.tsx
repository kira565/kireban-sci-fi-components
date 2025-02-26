import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export interface AboutHeaderProps {
  text?: string;
}

export const AboutHeader: React.FC<AboutHeaderProps> = ({ text }) => {
  const container = useRef(null);
  const textRef = useRef(null);
  const pointsRef = useRef(null);

  useEffect(() => {
    gsap.to(container.current, {
      background: '#fa0',
      duration: 2
    });
  }, []);

  return (
    <div className="d-flex">
      <div ref={container} className="w-[1%] text-2xl font-bold flex items-center">
        <span ref={textRef} className="opacity-0">
          {text}
        </span>
        {/* <svg className="w-full h-full">
          <g ref={pointsRef} id="points" transform="translate(430, 0)">
            <rect x="0" y="0" width="15" height="15"></rect>
            <rect x="0" y="30" width="15" height="15"></rect>
            <rect x="0" y="60" width="15" height="15"></rect>
            <rect x="0" y="90" width="15" height="15"></rect>

            <rect x="15" y="15" width="15" height="15"></rect>
            <rect x="15" y="45" width="15" height="15"></rect>
            <rect x="15" y="75" width="15" height="15"></rect>

            <rect x="30" y="0" width="15" height="15"></rect>
            <rect x="30" y="30" width="15" height="15"></rect>
            <rect x="30" y="60" width="15" height="15"></rect>
            <rect x="30" y="90" width="15" height="15"></rect>

            <rect x="45" y="15" width="15" height="15"></rect>
            <rect x="45" y="45" width="15" height="15"></rect>
            <rect x="45" y="75" width="15" height="15"></rect>

            <rect x="60" y="0" width="15" height="15"></rect>
            <rect x="60" y="30" width="15" height="15"></rect>
            <rect x="60" y="60" width="15" height="15"></rect>
            <rect x="60" y="90" width="15" height="15"></rect>
          </g>
        </svg> */}
      </div>
    </div>
  );
};
