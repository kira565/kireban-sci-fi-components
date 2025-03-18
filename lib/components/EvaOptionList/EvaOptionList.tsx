import EvaListOptionComponent, { EvaListOptionProps } from './EvaListOptionComponent';

export interface EvaOptionListProps {
  options: EvaListOptionProps[];
  mobileView?: boolean;
  width?: string;
}

export const EvaOptionList: React.FC<EvaOptionListProps> = ({
  options,
  width = '100%',
  mobileView
}) => {
  return (
    <div className={`flex flex-col gap-2`} style={{ width }}>
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
