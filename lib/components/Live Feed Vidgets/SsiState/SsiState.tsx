import { useEffect, useRef } from 'react';
import Globe from '../../../assets/svg/modular_parts/GLOBE.svg?react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

export interface SsiStateProps {
  width?: string;
  height?: string;
}

export const SsiState: React.FC<SsiStateProps> = ({ width, height }) => {
  const globeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

    if (!globeRef.current) return;
    const selector = gsap.utils.selector(globeRef.current);
    const [path] = selector('#orbit_path') as unknown as SVGPathElement[];
    const [station] = selector('#station') as unknown as SVGGElement[];
    if (!path || !station) return;

    gsap.to(station, {
      duration: 90,
      ease: 'linear',
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0.7,
        end: 0.845
      }
    });

    const [tokyo] = selector('#tokyo');
    if (tokyo) {
      gsap.to(tokyo, {
        opacity: 0.5, // Fades in/out (like Tailwind)
        scale: 1.12, // Slight size variation
        duration: 0.5, // Pulse speed (matches Tailwind's 1.5s)
        repeat: -1, // Infinite loop
        yoyo: true, // Go back and forth
        ease: 'easeInOut' // Smooth animation
      });
    }

    const points = gsap.utils.toArray('#points > g');
    gsap.to(points, {
      opacity: 0,
      duration: 0.2, // Animation duration
      repeat: -1, // Infinite loop
      yoyo: true, // Makes the animation go back and forth
      stagger: {
        each: 0.1, // Delay between each rect animation
        from: 'random' // Random order
      },
      ease: 'power1.inOut' // Smooth easing
    });
  }, []);

  return (
    <div style={{ width, height }} className="border-[0.5px] border-evaTextWarning p-4">
      <Globe ref={globeRef} />
    </div>
  );
};
//#010101
//#090909
//#0D0D0D
//#050505
//#070707
//#0C0C0C
//#0B0B0B
//#0A0A0A
