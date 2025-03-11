import useSciFiCode from '@/hooks/useSciFiCode';
import EvaListOption from '../EvaOptionList/EvaListOptionComponent';

export interface ShortInfoPanelProps {
  width?: string;
  height?: string;
  labelWidth?: string;
  colorSchema?: string;
  code?: number;
}

export const ShortInfoPanel: React.FC<ShortInfoPanelProps> = ({
  width,
  colorSchema = '#fa0',
  labelWidth,
  height,
  code = 123
}) => {
  return (
    <div className="text-black dark:text-white font-[Oxanium] flex gap-2" style={{ width, height }}>
      <div className={`w-[13px] h-full bg-evaTextWarning trapezoid`}>
        <div className="rotate-90 text-[0.67rem] text-nowrap font-semibold p-[0.25rem]">
          {useSciFiCode(1)}
        </div>
      </div>
      <div className="flex flex-col justify-between ml-[1.5rem]">
        <div className="text-2xl font-semibold">NAME</div>
        <div>KIRILL KAGDIN</div>
      </div>
    </div>
  );
};
