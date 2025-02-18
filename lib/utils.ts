import gsap from 'gsap';
export function appearFrom(
  ref: React.RefObject<HTMLElement | null>,
  direction: 'top' | 'left' | 'bottom' | 'right'
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

  gsap.from(ref.current, {
    [coord]: coordVal, // Move from this coordinate
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out'
  });
}
