import JapanMap from '../../../assets/svg/modular_parts/japan.svg?react';

export interface JpMapProps {
  width?: string;
  height?: string;
}

export const JpMap: React.FC<JpMapProps> = ({ width, height }) => {
  return (
    <div style={{ width, height }}>
      <JapanMap />
    </div>
  );
};
