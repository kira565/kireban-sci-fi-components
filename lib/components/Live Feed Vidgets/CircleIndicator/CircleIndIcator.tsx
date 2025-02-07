import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export interface CircleIndicatorProps {
  children?: React.ReactNode;
}
export const CircleIndicator: React.FC<CircleIndicatorProps> = ({ children }) => {
  const timeline = useRef<gsap.core.Timeline>(gsap.timeline({ paused: true }));
  const rectRef = useRef(null);
  const lineRef = useRef<SVGPathElement>(null);
  const circleRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    gsap.fromTo(
      rectRef.current,
      { scaleX: 0, transformOrigin: 'left center' }, // Start with scaleX 0
      { scaleX: 1, duration: 2, ease: 'power3.out' } // End with scaleX 1
    );

    if (circleRef.current) {
      const pathLength = circleRef.current.getTotalLength();

      gsap.set(circleRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        fill: 'none', // Запрещаем заливку
        stroke: '#CFFF55', // Цвет обводки
        strokeWidth: 0.7 // Ширина линии
      });

      // Анимация появления контура
      gsap.to(circleRef.current, {
        strokeDashoffset: 0, // Линия будет нарисована полностью
        duration: 2, // Время анимации
        ease: 'circle'
      });
    }

    if (lineRef.current) {
      const pathLength = lineRef.current.getTotalLength();

      gsap.set(lineRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength, // Начинаем с полностью скрытого пути
        stroke: '#909090', // Цвет линии
        strokeWidth: 0.5, // Ширина линии
        fill: 'none' // Без заливки
      });

      gsap.to(lineRef.current, {
        strokeDashoffset: pathLength / 2, // Линия будет рисоваться полностью
        duration: 3, // Время анимации
        ease: 'power2.out'
      });
    }
  }, []);

  return (
    <div style={{ width: '180px', height: '180px' }}>
      <svg
        className="w-full h-full"
        viewBox="0 0 122 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          ref={rectRef}
          id="text-path"
          opacity="0.9"
          d="M65 0H0V15H65V0Z"
          fill="white"
          fillOpacity="0.15"
        />
        <text
          className="text font-[RobotoCondensed]"
          fontWeight="600"
          fontSize="6"
          fill="white"
          x="3"
          y="9.5"
          textAnchor="left">
          {children}
        </text>
        <path d="M4.80008 21.3872H3.27393V22.9385H4.80008V21.3872Z" fill="#909090" />
        <path d="M1.52616 21.3872H0V22.9385H1.52616V21.3872Z" fill="#CFFF55" />
        <g opacity="0.65">
          <path
            ref={lineRef}
            opacity="0.65"
            d="M93.3184 58.532L54.4642 19.0394H0V18.1963H54.8092L93.9023 57.9351L93.3184 58.532Z"
            fill="#909090"
          />
        </g>
        <g opacity="0.5">
          <path
            opacity="0.5"
            d="M93.4877 76.2722C89.9318 76.2722 86.4558 75.2178 83.4992 73.2422C80.5425 71.2667 78.2381 68.4588 76.8774 65.1736C75.5166 61.8884 75.1605 58.2734 75.8543 54.7858C76.548 51.2983 78.2603 48.0947 80.7747 45.5804C83.2891 43.066 86.4926 41.3536 89.9802 40.6599C93.4678 39.9662 97.0827 40.3222 100.368 41.683C103.653 43.0438 106.461 45.3482 108.437 48.3048C110.412 51.2614 111.467 54.7375 111.467 58.2933C111.461 63.06 109.565 67.63 106.195 71.0005C102.824 74.3711 98.2544 76.267 93.4877 76.2722ZM93.4877 42.2819C90.3209 42.2819 87.2253 43.2209 84.5922 44.9803C81.9591 46.7397 79.9069 49.2403 78.695 52.166C77.4831 55.0917 77.1661 58.3111 77.7839 61.417C78.4017 64.523 79.9266 67.3759 82.1659 69.6152C84.4051 71.8544 87.2581 73.3793 90.364 73.9971C93.4699 74.615 96.6893 74.2979 99.615 73.086C102.541 71.8741 105.041 69.8219 106.801 67.1888C108.56 64.5558 109.499 61.4601 109.499 58.2933C109.49 54.0508 107.8 49.9846 104.799 46.9859C101.798 43.9872 97.7303 42.3004 93.4877 42.2952V42.2819Z"
            fill="#909090"
          />
        </g>
        <path
          ref={circleRef}
          d="M93.4877 76.2722C89.9318 76.2722 86.4558 75.2178 83.4992 73.2422C80.5425 71.2667 78.2381 68.4588 76.8774 65.1736C75.5166 61.8884 75.1605 58.2734 75.8543 54.7858C76.548 51.2983 78.2603 48.0947 80.7747 45.5804C83.2891 43.066 86.4926 41.3536 89.9802 40.6599C93.4678 39.9662 97.0827 40.3222 100.368 41.683C103.653 43.0438 106.461 45.3482 108.437 48.3048C110.412 51.2614 111.467 54.7375 111.467 58.2933C111.461 63.06 109.565 67.63 106.195 71.0005C102.824 74.3711 98.2544 76.267 93.4877 76.2722ZM93.4877 42.2819C90.3209 42.2819 87.2253 43.2209 84.5922 44.9803C81.9591 46.7397 79.9069 49.2403 78.695 52.166C77.4831 55.0917 77.1661 58.3111 77.7839 61.417C78.4017 64.523 79.9266 67.3759 82.1659 69.6152C84.4051 71.8544 87.2581 73.3793 90.364 73.9971C93.4699 74.615 96.6893 74.2979 99.615 73.086C102.541 71.8741 105.041 69.8219 106.801 67.1888C108.56 64.5558 109.499 61.4601 109.499 58.2933C109.49 54.0508 107.8 49.9846 104.799 46.9859C101.798 43.9872 97.7303 42.3004 93.4877 42.2952V42.2819Z"
          fill="none"
        />
        <path d="M120.988 25.2749H109.356V27.1859H120.988V25.2749Z" fill="#CFFF55" />
        <path opacity="0.45" d="M106.038 25.2749H94.4062V27.1859H106.038V25.2749Z" fill="#CFFF55" />
        <path
          opacity="0.75"
          d="M115.716 35.0963L110.97 39.8423L112.025 40.898L116.771 36.152L115.716 35.0963Z"
          fill="#909090"
        />
        <path
          opacity="0.75"
          d="M75.0382 75.7743L70.2031 80.6094L71.2588 81.6651L76.0939 76.83L75.0382 75.7743Z"
          fill="#909090"
        />
        <path
          d="M93.4674 60.5032C94.6878 60.5032 95.6771 59.5139 95.6771 58.2936C95.6771 57.0733 94.6878 56.084 93.4674 56.084C92.2471 56.084 91.2578 57.0733 91.2578 58.2936C91.2578 59.5139 92.2471 60.5032 93.4674 60.5032Z"
          fill="#909090"
        />
      </svg>
    </div>
  );
};
