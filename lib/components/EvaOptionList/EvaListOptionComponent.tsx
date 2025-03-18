import useSciFiCode from '../../hooks/useSciFiCode';

export interface EvaListOptionProps {
  title: string;
  clickHandler: () => void;
  sciFiCode: number;
  isActive?: boolean;
  showMobileView?: boolean;
}

const EvaListOption: React.FC<EvaListOptionProps> = ({
  title,
  sciFiCode,
  isActive,
  clickHandler,
  showMobileView = false
}) => {
  const code = useSciFiCode(sciFiCode);
  return (
    <button
      onClick={clickHandler}
      className={`flex flex-row gap-2 h-[45px] w-full items-center theme-text cursor-pointer group font-[Oxanium] border-r`}>
      {/* Left Yellow Element */}
      <div
        className={`w-[10px] h-full bg-evaTextWarning trapezoid ${isActive ? 'glowedWarning' : ''}`}>
        <div className="rotate-90 text-[0.45rem] text-nowrap font-semibold m-1">{code}</div>
      </div>

      {/* Group for all other elements */}
      {!showMobileView && (
        <div
          className={`h-full w-full gap-2 flex items-center transition-all duration-300 ease-in-out 
          ${isActive ? 'activeItem glowedWarning border-1' : 'hoveredItem'} 
        `}>
          {/* Title */}
          <div
            className={`font-bold text-left w-full ${isActive ? '' : 'border-b'} group-hover:border-none h-full m-1`}>
            {title}
          </div>

          {/* Hover Indicator */}
          <div
            className={`w-[10px] h-[5px] mt-auto bg-black dark:bg-white group-hover:bg-white dark:group-hover:bg-black`}></div>
          <div className="text-[0.1em] mt-auto text-nowrap mr-1">{code}</div>
        </div>
      )}
    </button>
  );
};

export default EvaListOption;
