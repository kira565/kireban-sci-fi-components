import gsap from 'gsap';
import { useEffect, useRef } from 'react';
export type AppearDirection = 'top' | 'left' | 'bottom' | 'right';

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

export function dissApearTo(
  ref: React.RefObject<HTMLElement | null>,
  direction: AppearDirection,
  onComplete?: () => void
) {
  if (!ref.current) return;

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

  gsap.to(ref.current, {
    [coord]: coordVal,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    onComplete
  });
}

type BlinkOpts = {
  blinks?: number;
  duration?: number;
  delayBetween?: number;
};

type BlinkEntities = {
  options?: BlinkOpts;
  ref: React.RefObject<HTMLElement | null>;
};

//** Only if opacity 0 */
export function useBlinkingAppear(
  entities?: BlinkEntities[],
  isAnimationStarted = true,
  onComplete?: () => void
) {
  useEffect(() => {
    if (!entities || !isAnimationStarted) return;
    const timeline = gsap.timeline({ onComplete });

    entities.forEach((entity, index) => {
      const { ref } = entity;
      const { blinks = 4, duration = 0.2, delayBetween = 0.2 } = entity.options || {};

      const el = ref.current;
      if (!el) return;

      const delay = index * (blinks * duration * 2 + delayBetween);

      for (let i = 0; i < blinks; i++) {
        timeline.to(el, { opacity: 1, duration, ease: 'power1.inOut' }, delay + i * duration * 2);
        timeline.to(
          el,
          { opacity: 0, duration, ease: 'power1.inOut' },
          delay + i * duration * 2 + duration
        );
      }

      timeline.to(el, { opacity: 1, duration }, delay + blinks * duration * 2);
    });

    return () => {
      timeline.kill();
    };
  }, [entities, onComplete, isAnimationStarted]);
}
