import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export interface AboutHeaderProps {
  text?: string;
}

export const AboutHeader: React.FC<AboutHeaderProps> = ({ text }) => {
  const container = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(container.current, {
      background: '#ffaa0048',
      duration: 2
    });
  }, []);

  return (
    <div ref={container} className="w-full text-2xl font-bold flex items-center p-2">
      <span ref={textRef}>{text}</span>
    </div>
  );
};
