import { useEffect, useRef } from 'react';
import SvgBtnFg from '../../assets/svg/fgp.svg?react';
import gsap from 'gsap';

export interface ButtonFingerProps {
  width: string;
  height: string;
  onClick?: (event: React.MouseEvent) => void;
  /**
   * Flag for single use button behaviour
   */
  hideAfterClick?: boolean;
  /**
   * This callback will be called after dissapearing animation completed, you can destroy component then
   * @returns
   */
  destroyCallback?: () => void;
  ref?: React.RefObject<HTMLButtonElement | null>;
}

export const ButtonFinger: React.FC<ButtonFingerProps> = ({
  width,
  height,
  onClick,
  hideAfterClick = false,
  destroyCallback,
  ref
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const timeLine = useRef<gsap.core.Timeline>(
    gsap.timeline({ paused: true, yoyo: true, repeat: 0 })
  );
  const appearTimeLine = useRef<gsap.core.Timeline>(
    gsap.timeline({
      onReverseComplete: () => {
        if (hideAfterClick) gsap.to(svgRef.current, { opacity: 0 });
        if (destroyCallback) destroyCallback();
      }
    })
  );

  useEffect(() => {
    const q = gsap.utils.selector(svgRef.current);
    const paths = q('.stroke-fng') as unknown as SVGPathElement[];

    gsap.delayedCall(0.1, () => {
      appearTimeLine.current
        .from(q('.corner-left-bot'), {
          x: 20,
          y: -22,
          scale: 0.2,
          duration: 0.1,
          ease: 'power2.out'
        })
        .from('.edge-triangle-left', {
          scale: 0.4,
          x: 20,
          duration: 0.1,
          ease: 'power2.out'
        })
        .from('.corner-left-top', {
          scale: 0.2,
          x: 20,
          y: 26,
          duration: 0.1,
          ease: 'power2.out'
        })
        .from('.edge-triangle-top', {
          scale: 0.2,
          y: 26,
          duration: 0.1,
          ease: 'power2.out'
        })
        .from('.corner-right-top', {
          scale: 0.2,
          x: -19,
          y: 26,
          duration: 0.1,
          ease: 'power2.out'
        })
        .from('.edge-triangle-right', {
          scale: 0.4,
          x: -27,
          duration: 0.1,
          ease: 'power2.out'
        })
        .from('.corner-right-bot', {
          scale: 0.2,
          x: -19,
          y: -22,
          duration: 0.1,
          ease: 'power2.out'
        })
        .from('.edge-triangle-bot', {
          scale: 0.2,
          y: -27.5,
          duration: 0.1,
          ease: 'power2.out'
        })
        .from(paths, { scale: 0, duration: 0.5, ease: 'power2.out' });
    });
  }, []);

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
    if (!svgRef.current) return;
    if (appearTimeLine.current.reversed()) return;

    const q = gsap.utils.selector(svgRef.current);
    const paths = q('.stroke-fng') as unknown as SVGPathElement[];
    animatePaths(paths);
    animateElements(q);

    if (appearTimeLine.current.isActive()) {
      gsap.delayedCall(appearTimeLine.current.duration() - appearTimeLine.current.time(), () => {
        timeLine.current.play();
      });
    } else {
      timeLine.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (!svgRef.current) return;
    if (appearTimeLine.current.reversed()) return;

    const q = gsap.utils.selector(svgRef.current);
    const paths = q('.stroke-fng') as unknown as SVGPathElement[];

    const kill = () => {
      timeLine.current.reverse();
      gsap.killTweensOf(paths);
      animatePaths(paths, true);
      gsap.killTweensOf(q('.scanner'));
      gsap.set(q('.scanner'), { y: 0, opacity: 0 });
    };

    if (appearTimeLine.current.isActive()) {
      gsap.delayedCall(appearTimeLine.current.duration() - appearTimeLine.current.time(), () => {
        kill();
      });
    } else {
      kill();
    }
  };

  const hadleCLick = (event: React.MouseEvent) => {
    if (appearTimeLine.current.isActive()) return;

    const q = gsap.utils.selector(svgRef.current);

    if (hideAfterClick) {
      gsap.killTweensOf(q('.scanner'));
      timeLine.current.kill();
      gsap.set(q('.scanner'), { y: 0, opacity: 0 });
      gsap.set(q('.text'), { opacity: 0 });
      appearTimeLine.current.reverse();
    } else {
      gsap.to(svgRef.current, {
        scale: 1.1,
        duration: 0.05,
        repeat: 1,
        yoyo: true,
        ease: 'power1.out'
      });
    }
    if (onClick) onClick(event);
  };

  return (
    <button
      ref={ref}
      className={`text-black dark:text-white dark:fill-white`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={hadleCLick}
      style={{ height, width }}>
      <SvgBtnFg ref={svgRef} />
    </button>
  );
};
