import { useEffect, useRef } from 'react';
import JapanMap from '../../../assets/svg/modular_parts/japan.svg?react';
import gsap from 'gsap';
import Globe from '@assets/svg/icons/lat.svg?react';
import { AppearDirection, appearFrom } from '@/utils';

export interface JpMapProps {
  width?: string;
  height?: string;
  bgColor?: string;
  appear?: AppearDirection;
}

export const JpMap: React.FC<JpMapProps> = ({ width, height, bgColor, appear }) => {
  const timeline = useRef<gsap.core.Timeline>(gsap.timeline());
  const mapRef = useRef(null); // Reference for SVG container
  const containerRef = useRef(null);

  useEffect(() => {
    if (appear) {
      appearFrom(containerRef, appear);
    }

    const selector = gsap.utils.selector(mapRef.current);

    const redCircle = selector('#redcircle');
    const pathLine = selector('#pathline') as unknown as SVGPathElement[];
    const text = selector('#text');
    const pathLengthLine = pathLine?.[0].getTotalLength();

    const borders = gsap.utils.toArray('#bordergroup', mapRef.current);

    gsap.set(redCircle, { opacity: 0 });
    gsap.set(borders, { opacity: 0 });
    gsap.set(pathLine, {
      strokeDasharray: pathLengthLine,
      strokeDashoffset: pathLengthLine, // Начинаем с полностью скрытого пути
      strokeWidth: 0.5, // Ширина линии
      fill: 'none' // Без заливки
    });

    timeline.current
      .to(mapRef.current, {
        scale: 2, // Scale up
        x: -60,
        y: 25,
        duration: 5,
        transformOrigin: 'center' // Ensure scaling happens from the center
      })
      .to(redCircle, {
        opacity: 1,
        duration: 1.5,
        ease: 'power1.out'
      })
      .to(borders, {
        duration: 1,
        opacity: 1,
        rotation: 360, // Rotates full circle
        transformOrigin: '50% 50%',
        ease: 'circ.inOut'
      })
      .to(pathLine, {
        strokeDashoffset: pathLengthLine * 2, // Линия будет рисоваться полностью
        duration: 1, // Время анимации
        ease: 'power2.out'
      })
      .to(text, {
        opacity: 1,
        duration: 0.5
      });
  }, []);
  return (
    <div
      ref={containerRef}
      style={{ width, height, backgroundColor: bgColor }}
      className="border-[0.5px] border-evaTextWarning border-opacity-50 overflow-hidden bg-black relative text-black dark:text-white font-[Oxanium]">
      <JapanMap ref={mapRef} />
      <div className="absolute top-[2%] left-[2%] text-[0.6rem]">
        <div>REGION: EAST ASIA</div>
        <div>EXCLUSIVE ECONOMIC ZONE OF JAPAN</div>
        <div>36°N 138°E</div>
      </div>
      <div className="absolute bottom-[2%] right-[2%]">
        <div className="h-[25px] w-[25px] opacity-50">
          <Globe />
        </div>
      </div>
      <div className="absolute left-[2%] bottom-[2%] text-[0.6rem] opacity-50">
        SSI STATION GEOSPATIAL INTERFACE
      </div>
    </div>
  );
};
