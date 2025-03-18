import { AppearDirection } from '@/utils';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export function useAppearFrom(direction?: AppearDirection) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !direction) return;

    let coord: string = 'x';
    let coordVal: string = '-100%';

    switch (direction) {
      case 'top':
        coord = 'y';
        coordVal = '-100%';
        break;
      case 'bottom':
        coord = 'y';
        coordVal = '100%';
        break;
      case 'right':
        coord = 'x';
        coordVal = '100%';
        break;
      case 'left':
      default:
        coord = 'x';
        coordVal = '-100%';
        break;
    }

    gsap.fromTo(
      ref.current,
      { [coord]: coordVal, opacity: 0, visibility: 'visible' },
      { [coord]: '0%', opacity: 1, duration: 1.5, ease: 'power3.out' }
    );
  }, [direction]); // Запуск только при изменении `direction`

  return ref;
}
