import { useRef } from 'react';
import CircleSvg from '../../assets/svg/circle.svg?react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
export interface CircleProps {}

const Circle: React.FC<CircleProps> = () => {
  const ref = useRef<SVGSVGElement>(null);
  const animationRefRedSq = useRef<gsap.core.Tween>(null);
  const animationRefRedCircle1 = useRef<gsap.core.Tween>(null);
  const animationRefRedCircle2 = useRef<gsap.core.Tween>(null);

  useGSAP(() => {
    const target = ref.current?.querySelector('.red-square');
    const circles1 = ref.current?.querySelector('.frag-8') as SVGGraphicsElement;
    const circles2 = ref.current?.querySelector('.frag-7') as SVGGraphicsElement;

    if (target) {
      animationRefRedSq.current = gsap.to(target, {
        motionPath: {
          path: '#path-2', // Use the circle's path as the track
          align: '#path-2', // Ensure fragment is aligned to path
          alignOrigin: [0.5, 0.5], // Center the fragment along its path
          autoRotate: true
        },
        transformOrigin: '50% 50%',
        duration: 8,
        ease: 'power1.out'
      });
    }
    if (circles1) {
      animationRefRedCircle1.current = gsap.to(circles1, {
        motionPath: {
          path: '#path-1',
          align: '#path-1',
          alignOrigin: [0.428, 0.68],
          autoRotate: -45.5,
          end: 0.42
        },
        duration: 10,
        ease: 'power1.out'
      });
    }
    if (circles2) {
      animationRefRedCircle2.current = gsap.to(circles2, {
        motionPath: {
          path: '#path-1',
          align: '#path-1',
          alignOrigin: [0.58, 0.52],
          autoRotate: 108
        },
        duration: 8,
        ease: 'power1.out'
      });
    }
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const windowWidth = window.innerWidth;

    // Normalize cursor position (0 to 1)
    const progress = event.clientX / windowWidth;

    // Reverse direction if moving left or right
    const timeScale = progress < 0.5 ? -1 : 1;
    animationRefRedSq.current?.timeScale(timeScale);
    animationRefRedCircle1.current?.timeScale(timeScale);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <CircleSvg ref={ref} />
    </div>
  );
};

export default Circle;
