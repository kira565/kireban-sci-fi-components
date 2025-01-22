import FingerPrintSvg from '../../assets/svg/fingerprint-svgrepo-com.svg?react';

export interface FingerPrintButtonProps {
  width: number;
  height: number;
}

export const FingerPrintButton: React.FC<FingerPrintButtonProps> = ({ width, height }) => {
  return (
    <button
      className={`text-black dark:text-white`}
      style={{ width: `${width}px`, height: `${height}px` }}>
      <FingerPrintSvg />
    </button>
  );
};
