import { useEffect, useRef } from 'react';
import Globe from '../../../assets/svg/modular_parts/GLOBE.svg?react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { AppearDirection, appearFrom } from '../../../utils';

export interface SsiStateProps {
  width?: string;
  height?: string;
  appear?: AppearDirection;
}

export const SsiState: React.FC<SsiStateProps> = ({ width, height, appear }) => {
  const globeRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

    if (appear) {
      appearFrom(panelRef, appear);
    }

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

    const artifacts = gsap.utils.toArray('.artifact');

    gsap.to(artifacts, {
      opacity: 0,
      duration: 2,
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.1,
        from: 'random'
      },
      ease: 'bounce.inOut'
    });
  }, [appear]);

  return (
    <div
      ref={panelRef}
      style={{ width, height, visibility: `${appear ? 'hidden' : 'visible'}` }}
      className="border-[0.5px] border-opacity-50 border-evaTextWarning pr-1 pt-2 pb-2 dark:bg-black bg-transparent">
      <div className="ml-[8%]">
        <Globe ref={globeRef} />
      </div>
    </div>
  );
};

//2
//Latitude: 50.0°
//Longitude: 155.0°
//northwestern Pacific Ocean.

//1
// Here are the latitude and longitude coordinates for the red point (ISS position) on this screen:
// Latitude: 45.0°
// Longitude: 160.0°
