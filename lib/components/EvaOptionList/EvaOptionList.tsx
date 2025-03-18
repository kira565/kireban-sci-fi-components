import { AppearDirection, useAppearFrom } from '@/utils';
import EvaListOptionComponent, { EvaListOptionProps } from './EvaListOptionComponent';

export interface EvaOptionListProps {
  options: EvaListOptionProps[];
  mobileView?: boolean;
  width?: string;
  appear?: AppearDirection;
}

export const EvaOptionList: React.FC<EvaOptionListProps> = ({
  options,
  width = '100%',
  mobileView,
  appear
}) => {
  const container = useAppearFrom(appear);

  return (
    <div ref={container} className={`flex flex-col gap-2`} style={{ width }}>
      {options.map((option, index) => (
        <EvaListOptionComponent
          {...option}
          key={index}
          sciFiCode={index}
          showMobileView={mobileView}
        />
      ))}
    </div>
  );
};
