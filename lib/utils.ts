import gsap from 'gsap';

export type AppearDirection = 'top' | 'left' | 'bottom' | 'right';

export function dissAppearTo(ref: React.RefObject<HTMLElement | null>, direction: AppearDirection) {
  if (!ref.current) return;

  let coord = 'x';
  let coordVal = '0%';

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
}

export function appearFrom(
  ref: React.RefObject<HTMLElement | null>,
  direction: AppearDirection,
  dissapear = false
) {
  if (!ref.current) return;

  let coord: string = 'x';
  let coordVal: string = dissapear ? '0%' : '-100%';

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
  //TODO HERE FUNCTION
  gsap.fromTo(
    ref.current,
    {
      [coord]: coordVal, // Move from this coordinate
      opacity: dissapear ? 1 : 0,
      ease: 'power3.out',
      visibility: 'visible'
    },
    {
      [coord]: dissapear ? coordVal : '0%',
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    }
  );
}
