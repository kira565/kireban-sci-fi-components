import { useRef } from 'react';
import FingerPrintSvg from '../../assets/svg/fgp.svg?react';
import { gsap } from 'gsap';

export interface FingerPrintButtonProps {
  width: number;
  height: number;
  onCLick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FingerPrintButton: React.FC<FingerPrintButtonProps> = ({ width, height, onCLick }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const timeLine = useRef<gsap.core.Timeline>(
    gsap.timeline({ paused: true, yoyo: true, repeat: 0 })
  );

  const animateElements = (q: gsap.utils.SelectorFunc) => {
    timeLine.current.clear();
    return timeLine.current
      .to(q('.corner-left-bot'), { x: -10, y: 5, duration: 0.05 })
      .to(q('.edge-triangle-left'), { x: -10, duration: 0.05 })
      .to(q('.corner-left-top'), { x: -10, y: -5, duration: 0.05 })
      .to(q('.edge-triangle-top'), { y: -5, duration: 0.05 })
      .to(q('.corner-right-top'), { x: 10, y: -5, duration: 0.05 })
      .to(q('.edge-triangle-right'), { x: 10, duration: 0.05 })
      .to(q('.corner-right-bot'), { x: 10, y: 5, duration: 0.05 })
      .to(q('.edge-triangle-bot'), { y: 5, duration: 0.05 })
      .to(q('text'), {
        opacity: 1,
        duration: 1,
        ease: 'power1.in'
      })
      .to(q('.scanner'), {
        opacity: 1,
        y: 80,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
  };

  const animatePaths = (paths: SVGPathElement[], initial = false) => {
    paths.forEach((path: SVGPathElement) => {
      const pathLength = path.getTotalLength();
      if (!initial) {
        // Set initial properties of each path
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
          stroke: 'transparent'
        });

        gsap.to(path, {
          strokeDashoffset: 0,
          stroke: '#3ee73e',
          duration: 1,
          ease: 'power1.inOut'
        });
      } else {
        gsap.to(path, {
          stroke: 'currentColor'
        });
      }
    });
  };

  const handleMouseEnter = () => {
    const q = gsap.utils.selector(svgRef.current);

    const paths = q('.stroke-fng') as unknown as SVGPathElement[];
    animatePaths(paths);
    animateElements(q);
    timeLine.current.play();
  };

  const handleMouseLeave = () => {
    if (svgRef.current) {
      const q = gsap.utils.selector(svgRef.current);
      const paths = q('.stroke-fng') as unknown as SVGPathElement[];

      timeLine.current.reverse();
      gsap.killTweensOf(paths);
      animatePaths(paths, true);
      gsap.killTweensOf(q('.scanner'));
      gsap.set(q('.scanner'), { y: 0, opacity: 0 });
    }
  };

  return (
    <button
      className={`text-black dark:text-white dark:fill-white`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onCLick}
      style={{ width: `${width}px`, height: `${height}px` }}>
      <FingerPrintSvg ref={svgRef} />
    </button>
  );
};

export default FingerPrintButton;
