import gsap from 'gsap';

export type AppearDirection = 'top' | 'left' | 'bottom' | 'right';

export function appearFrom(ref: React.RefObject<HTMLElement | null>, direction: AppearDirection) {
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

  gsap.fromTo(
    ref.current,
    {
      [coord]: coordVal, // Move from this coordinate
      opacity: 0,
      ease: 'power3.out',
      visibility: 'visible'
    },
    {
      [coord]: '0%',
      opacity: 1,
      duration: 0.6,
      ease: 'power3.out'
    }
  );
}
