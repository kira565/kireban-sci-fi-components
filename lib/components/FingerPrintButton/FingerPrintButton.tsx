import { useRef } from 'react';
import FingerPrintSvg from '../../assets/svg/fgp.svg?react';
import { gsap } from 'gsap';

export interface FingerPrintButtonProps {
  width: number;
  height: number;
}

export const FingerPrintButton: React.FC<FingerPrintButtonProps> = ({ width, height }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const animationRef = useRef<gsap.core.Tween>(null);

  const handleMouseEnter = () => {
    if (svgRef.current) {
      const q = gsap.utils.selector(svgRef.current);
      animationRef.current = gsap.to(q('.scanner'), {
        opacity: 1,
        y: 80,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }
  };
  const handleMouseLeave = () => {
    // if (animationRef.current) {
    // }
  };

  return (
    <button
      className={`text-black dark:text-white dark:fill-white`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: `${width}px`, height: `${height}px` }}>
      <FingerPrintSvg ref={svgRef} />
    </button>
  );
};
