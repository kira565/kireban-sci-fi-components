import { useEffect, useRef, useState } from 'react';
import Globe from '../../../assets/svg/modular_parts/GLOBE.svg?react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { AppearDirection } from '../../../utils';
import lat from '@assets/svg/icons/lat.svg';
import lon from '@assets/svg/icons/lon.svg';

export interface SsiStateProps {
  width?: string;
  height?: string;
  appear?: AppearDirection;
  showCoordinates?: boolean;
}

export const SsiStateTile = ({
  imgSrc,
  text,
  val,
  finished
}: {
  imgSrc?: string;
  text?: string;
  val: string;
  finished: boolean;
}) => {
  return (
    <div className="flex flex-row w-full h-full items-center gap-1 text-xs">
      {imgSrc ? (
        <div className="w-[20%]">
          <img src={imgSrc} alt="_tile_icon"></img>
        </div>
      ) : (
        <div
          className="w-[3%] h-full animate-pulse"
          style={{ background: !finished ? '#fa0' : '#19DD4D' }}></div>
      )}
      <div className="flex flex-wrap">
        {text && <div className="">{text}</div>}
        <div className="overflow-hidden text-ellipsis text-nowrap">{val}</div>
      </div>
    </div>
  );
};

export const SsiState: React.FC<SsiStateProps> = ({
  width,
  height,
  appear,
  showCoordinates = true
}) => {
  const globeRef = useRef(null);
  const panelRef = useRef(null);
  const [position, setPosition] = useState({
    lon: 170,
    lat: 10,
    area: 'Pacific Ocean',
    finished: false
  });

  useEffect(() => {
    const totalDuration = 90;

    gsap.registerPlugin(MotionPathPlugin);

    if (!globeRef.current) return;
    const selector = gsap.utils.selector(globeRef.current);
    const [path] = selector('#orbit_path') as unknown as SVGPathElement[];
    const [station] = selector('#station') as unknown as SVGGElement[];
    if (!path || !station) return;

    gsap.to(station, {
      duration: totalDuration,
      ease: 'linear',
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0.7,
        end: 0.845
      },
      onUpdate: function () {
        const elapsed = this.time();

        if (elapsed >= 30 && elapsed < 31) {
          setPosition({ lon: 150, lat: 20, area: 'Pacific Ocean', finished: false });
        } else if (elapsed >= 60 && elapsed < 61) {
          setPosition({ lon: 130, lat: 30, area: 'Near Japan EEZ', finished: false });
        } else if (elapsed >= 90) {
          setPosition({ lon: 140, lat: 35, area: 'Tokyo, Japan', finished: true });
        }
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

    const points = gsap.utils.toArray('#points > g', panelRef.current);
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

    const artifacts = gsap.utils.toArray('.artifact', panelRef.current);

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
      className="border-[0.5px] flex flex-col border-opacity-50 border-evaTextWarning p-2 dark:bg-black bg-transparent text-black dark:text-white font-[Oxanium]">
      {showCoordinates && (
        <div className="w-full grid grid-rows-2 grid-cols-2 h-[30%] gap-2 mb-[35px] p-2 border-b border-[0.5px] border-evaTextWarning border-opacity-50">
          <SsiStateTile
            imgSrc={lat}
            finished={position.finished}
            text="LAT:"
            val={position.lat + '°N'}
          />
          <SsiStateTile
            imgSrc={lon}
            finished={position.finished}
            text="LON:"
            val={position.lon + '°W'}
          />
          <SsiStateTile text="AREA:" finished={position.finished} val={position.area} />
          <SsiStateTile text="DEST:" finished={position.finished} val={'Tokyo, Japan'} />
        </div>
      )}
      <div className="ml-[4%]">
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
