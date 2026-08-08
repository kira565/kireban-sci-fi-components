import { useAppearFrom } from '@/utils';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
export interface BarcodeProps {
  fill?: string;
  width?: string;
  appear?: 'top' | 'left' | 'bottom' | 'right';
  opacity?: string;
}

export const Barcode: React.FC<BarcodeProps> = ({ fill = '#fa0', width, appear, opacity }) => {
  const pointsRef = useRef(null);
  const containerRef = useAppearFrom(appear);

  useEffect(() => {
    const rects = gsap.utils.toArray('#points rect', containerRef.current); // Select all rect elements inside #points

    const animation = gsap.to(rects, {
      opacity: 0, // Fade out
      duration: 0.05, // Animation duration
      delay: gsap.utils.random(0, 0.5),
      stagger: {
        each: 0.1, // Delay between each rect animation
        from: 'random', // Random order
        repeat: -1,
        repeatDelay: gsap.utils.random(0.3, 0.8),
        yoyo: true
      },
      ease: 'power1.inOut' // Smooth easing
    });

    return () => {
      animation.kill();
    };
  }, [appear, containerRef]);

  return (
    <div
      ref={containerRef}
      style={{
        visibility: appear ? 'hidden' : 'visible',
        width
      }}>
      <svg
        style={{ fill: 'rgba(255, 255, 255, 0)' }}
        x="0px"
        y="0px"
        className="w-full h-full"
        viewBox="0 0 520 146"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1">
        <rect x="0" y="0" width="422" height="146"></rect>

        <g transform="translate(10, 10)" fill={fill} opacity={opacity}>
          <rect x="0" y="0" width="6" height="100"></rect>
          <rect x="9" y="0" width="3" height="100"></rect>
          <rect x="18" y="0" width="9" height="100"></rect>
          <rect x="33" y="0" width="6" height="100"></rect>
          <rect x="45" y="0" width="3" height="100"></rect>
          <rect x="57" y="0" width="3" height="100"></rect>
          <rect x="66" y="0" width="3" height="100"></rect>
          <rect x="75" y="0" width="6" height="100"></rect>
          <rect x="84" y="0" width="3" height="100"></rect>
          <rect x="99" y="0" width="3" height="100"></rect>
          <rect x="111" y="0" width="3" height="100"></rect>
          <rect x="120" y="0" width="6" height="100"></rect>
          <rect x="132" y="0" width="6" height="100"></rect>
          <rect x="147" y="0" width="3" height="100"></rect>
          <rect x="156" y="0" width="3" height="100"></rect>
          <rect x="165" y="0" width="6" height="100"></rect>
          <rect x="174" y="0" width="3" height="100"></rect>
          <rect x="186" y="0" width="9" height="100"></rect>
          <rect x="198" y="0" width="3" height="100"></rect>
          <rect x="207" y="0" width="6" height="100"></rect>
          <rect x="216" y="0" width="3" height="100"></rect>
          <rect x="231" y="0" width="6" height="100"></rect>
          <rect x="240" y="0" width="9" height="100"></rect>
          <rect x="252" y="0" width="9" height="100"></rect>
          <rect x="264" y="0" width="9" height="100"></rect>
          <rect x="276" y="0" width="3" height="100"></rect>
          <rect x="282" y="0" width="6" height="100"></rect>
          <rect x="297" y="0" width="6" height="100"></rect>
          <rect x="306" y="0" width="9" height="100"></rect>
          <rect x="318" y="0" width="9" height="100"></rect>
          <rect x="330" y="0" width="6" height="100"></rect>
          <rect x="342" y="0" width="6" height="100"></rect>
          <rect x="351" y="0" width="6" height="100"></rect>
          <rect x="363" y="0" width="6" height="100"></rect>
          <rect x="378" y="0" width="9" height="100"></rect>
          <rect x="390" y="0" width="3" height="100"></rect>
          <rect x="396" y="0" width="6" height="100"></rect>
          <text
            className="text font-[Oxanium]"
            textAnchor="middle"
            x="201"
            y="126"
            fontSize={18}
            fontWeight={600}>
            107105114971535453
          </text>

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
        </g>
      </svg>
    </div>
  );
};
