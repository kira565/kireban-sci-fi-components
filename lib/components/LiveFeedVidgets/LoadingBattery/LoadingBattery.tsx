import SolarChargeSvg from '../../../assets/svg/solar-charge.svg?react';
import SolarGraph from '../../../assets/svg/graph.svg?react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { appearFrom } from '../../../utils';

export interface LoadingBatteryProps {
  width?: string;
  height?: string;
  appear?: 'top' | 'left' | 'bottom' | 'right';
}

export const Tile: React.FC<{
  children?: React.ReactNode;
  label: string;
  limit: number;
  textSize: number;
}> = ({ children, label, limit, textSize }) => {
  const [number, setNumber] = useState('0');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber((prev) => {
        const num = parseFloat(prev);
        if (num < limit) {
          const random = Math.random() * (limit - num) + num;
          const toFixed = random.toFixed(1);
          return toFixed;
        } else {
          clearInterval(intervalId);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [limit]);

  return (
    <div className="flex items-center gap-1 w-[100%]">
      <div className="h-3/4 w-[3%] bg-green-500"></div>
      <div
        style={{ fontSize: `${textSize}px`, width: `${textSize * 15}px` }}
        className="opacity-50">
        {label}
        {number}
        {children}
      </div>
    </div>
  );
};

export const LoadingBattery: React.FC<LoadingBatteryProps> = ({ width, height, appear }) => {
  const loadingBarRef = useRef<SVGSVGElement>(null);
  const panelRef = useRef(null);
  const [scale, setScale] = useState({ text: 12, header: 24, showLabels: true });

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const containerWidth = entry.target.getBoundingClientRect().width; // Read actual width in pixels
        let newScale;
        if (containerWidth < 170) {
          newScale = { text: 2, header: 8, showLabels: false };
        } else if (containerWidth >= 170 && containerWidth < 230) {
          newScale = { text: 3, header: 8, showLabels: true };
        } else if (containerWidth >= 230 && containerWidth < 390) {
          newScale = { text: 5, header: 12, showLabels: true }; // small
        } else if (containerWidth >= 390 && containerWidth < 640) {
          newScale = { text: 7, header: 18, showLabels: true }; // med
        } else if (containerWidth >= 640 && containerWidth < 900) {
          newScale = { text: 12, header: 32, showLabels: true }; // Large
        } else {
          newScale = { text: 14, header: 38, showLabels: true }; // ExtraLarge
        }

        setScale(newScale);
      }
    });

    if (panelRef.current) {
      observer.observe(panelRef.current);
    }

    if (appear) {
      appearFrom(panelRef, appear);
    }

    if (loadingBarRef.current) {
      gsap.to('#mask-rect', {
        x: 931, // Двигаем маску справа налево
        duration: 8, // Скорость анимации
        ease: 'linear', // Плавное движение
        onComplete: () => {
          gsap.to('#loading-content', {
            opacity: 0.5, // Затемняем немного
            duration: 0.8, // Длительность одного цикла пульсации
            repeat: -1, // Бесконечно
            yoyo: true, // Возвращаем обратно
            ease: 'sine.inOut' // Мягкое появление и исчезновение
          });
        }
      });

      gsap.to('#solar-graph', {
        x: '-=1300', // Move the wave group to the left for smooth scrolling
        duration: 5,
        repeat: -1,
        ease: 'linear',
        modifiers: {
          x: gsap.utils.unitize((value) => parseFloat(value) % 1300) // Keep x within range
        }
      });
    }
    return () => observer.disconnect();
  }, [appear]);

  return (
    <div
      ref={panelRef}
      style={{ width, height, visibility: `${appear ? 'hidden' : 'visible'}` }}
      className="font-[Oxanium] text-white flex gap-1 flex-row dark:bg-black bg-transparent w-full border-[0.5px] border-opacity-50 border-evaTextWarning p-1">
      <div className="flex-col flex w-full">
        <div className="flex flex-row h-[70%] p-[2%] gap-1">
          <div className="flex flex-col w-[100%]">
            <div style={{ fontSize: `${scale.header}px` }}>SOLAR ENERGY</div>
            <div className="h-1/2">
              <SolarGraph />
            </div>
          </div>
          {scale.showLabels && (
            <div className="flex flex-row p-[1%] justify-between w-[60%]">
              <div className="flex flex-col h-full justify-between w-1/3">
                <Tile textSize={scale.text} limit={50.5} label="SPEC-"></Tile>
                <Tile textSize={scale.text} limit={100} label="PV-CAP "></Tile>
                <Tile textSize={scale.text} limit={100} label="SOL-CHR ">
                  %
                </Tile>
              </div>
              <div className="flex flex-col h-full justify-between w-1/3">
                <Tile textSize={scale.text} limit={9.8} label="PHOTON-INT "></Tile>
                <Tile textSize={scale.text} limit={220} label="VOLT-REG "></Tile>
                <Tile textSize={scale.text} limit={14.5} label="AUX-ENG "></Tile>
              </div>
              <div className="flex flex-col h-full justify-between w-1/3">
                <Tile textSize={scale.text} limit={99.8} label="SYN-SAT "></Tile>
                <Tile textSize={scale.text} limit={99.9} label="BATT-OPT ">
                  %
                </Tile>
                <Tile textSize={scale.text} limit={50.5} label="ION-FREQ "></Tile>
              </div>
            </div>
          )}
        </div>
        <div className="mt-auto">
          <SolarChargeSvg ref={loadingBarRef}></SolarChargeSvg>
        </div>
      </div>
    </div>
  );
};
