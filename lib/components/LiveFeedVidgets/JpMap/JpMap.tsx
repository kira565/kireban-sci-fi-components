import { useEffect, useRef } from 'react';
import JapanMap from '../../../assets/svg/modular_parts/japan.svg?react';
import gsap from 'gsap';

export interface JpMapProps {
  width?: string;
  height?: string;
  colorSchema?: string;
  bgColor?: string;
}

export const JpMap: React.FC<JpMapProps> = ({ width, height, colorSchema = '#fa0', bgColor }) => {
  const mapRef = useRef(null); // Reference for SVG container

  useEffect(() => {
    gsap.to(mapRef.current, {
      scale: 3, // Scale up
      x: -120,
      duration: 5,
      transformOrigin: 'center' // Ensure scaling happens from the center
    });
  }, []);
  return (
    <div
      style={{ width, height, borderColor: colorSchema, backgroundColor: bgColor }}
      className="border-[0.5px] border-opacity-50 overflow-hidden bg-black">
      <JapanMap ref={mapRef} />
    </div>
  );
};
