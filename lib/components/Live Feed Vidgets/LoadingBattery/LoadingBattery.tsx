import SolarChargeSvg from '../../../assets/svg/solar-charge.svg?react';
import SolarGraph from '../../../assets/svg/graph.svg?react';
import Border from '../../../assets/svg/modular_parts/border.svg?react';
import BorderT1 from '../../../assets/svg/modular_parts/bordert1.svg?react';
import BorderT2 from '../../../assets/svg/modular_parts/bordert2.svg?react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

export interface LoadingBatteryProps {
  width: string;
  height?: string;
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

export const LoadingBattery: React.FC<LoadingBatteryProps> = ({ width, height }) => {
  const loadingBarRef = useRef<SVGSVGElement>(null);
  const panelRef = useRef(null);
  const [scale, setScale] = useState({ text: 12, header: 24 });

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const containerWidth = entry.target.getBoundingClientRect().width; // Read actual width in pixels
        console.log(containerWidth);
        let newScale;
        if (containerWidth < 300) {
          newScale = { text: 4, header: 10 }; // small
        } else if (containerWidth >= 300 && containerWidth < 600) {
          newScale = { text: 5, header: 18 }; // med
        } else if (containerWidth >= 600 && containerWidth < 900) {
          newScale = { text: 10, header: 32 }; // Large
        } else {
          newScale = { text: 12, header: 38 }; // ExtraLarge
        }

        setScale(newScale);
        console.log(newScale);
      }
    });

    if (panelRef.current) {
      observer.observe(panelRef.current);
    }

    if (panelRef.current) {
      gsap.from(panelRef.current, {
        x: '-100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out'
      });
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
  }, []);

  return (
    <div
      ref={panelRef}
      style={{ width, height }}
      className="font-[Oxanium] text-white flex gap-1 flex-row">
      <div className="w-[5%] pt-5 h-full">
        <Border />
      </div>
      <div className="flex-col flex">
        <div className="h-[10%] flex">
          <div className="w-[30%]">
            <BorderT2 />
          </div>
          <div className="w-[70%]">
            <BorderT1 />
          </div>
        </div>
        <div className="flex flex-row h-[70%] p-1 gap-1">
          <div className="flex flex-col w-[50%]">
            <div style={{ fontSize: `${scale.header}px` }}>SOLAR ENERGY</div>
            <div className="h-1/2">
              <SolarGraph />
            </div>
          </div>
          <div className="flex flex-row p-1 justify-between w-[50%]">
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
        </div>
        <div className="mt-auto">
          <SolarChargeSvg ref={loadingBarRef}></SolarChargeSvg>
        </div>
      </div>
    </div>
  );
};
