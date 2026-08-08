import { AppearDirection, useAppearFrom } from '@/utils';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useSciFiCode } from '@/hooks/useSciFiCode';

export interface NavOptionProps {
  title: string;
  sciFiCode: number;
  value?: string;
  image?: ReactNode;
}

const NavOption: React.FC<NavOptionProps> = ({ title, sciFiCode, value, image }) => {
  const { onSelect, mobileView, selected } = useContext(OptionListContext);

  const code = useSciFiCode(sciFiCode);
  return (
    <button
      onClick={() => onSelect && onSelect(value)}
      className={`flex flex-row gap-2 h-[45px] items-center theme-text cursor-pointer group font-[Oxanium] border-r`}>
      {/* Left Yellow Element */}
      <div
        className={`w-[10px] h-full bg-evaTextWarning trapezoid ${selected === value ? 'glowedWarning' : ''}`}>
        <div className="rotate-90 text-[0.45rem] text-nowrap font-semibold m-1">{code}</div>
      </div>

      {/* Group for all other elements */}
      {!mobileView ? (
        <div
          className={`h-full w-full gap-2 flex items-center transition-all duration-300 ease-in-out 
          ${selected === value ? 'activeItem glowedWarning border-1' : 'hoveredItem'} 
        `}>
          {/* Title */}
          <div
            className={`font-bold text-left w-full ${selected === value ? '' : 'border-b'} group-hover:border-none h-full m-1`}>
            {title}
          </div>

          {/* Hover Indicator */}
          <div
            className={`w-[10px] h-[5px] mt-auto bg-black dark:bg-white group-hover:bg-white dark:group-hover:bg-black`}></div>
          <div className="text-[0.1em] mt-auto text-nowrap mr-1">{code}</div>
        </div>
      ) : (
        <div
          className={`flex flex-col w-full gap-1 ${selected === value ? 'activeItem glowedWarning border-1' : 'hoveredItem'}`}>
          <div className="flex justify-center w-full h-[30px]">{image}</div>
          <span className={`text-[0.6rem] font-semibold`}>{title}</span>
        </div>
      )}
    </button>
  );
};

const OptionListContext = createContext<{
  onSelect?: (value?: string) => void;
  selected?: string;
  mobileView?: boolean;
}>({});

export interface NavListProps {
  width?: string;
  appear?: AppearDirection;
  children: ReactNode;
  selected: string;
  onSelect?: (value?: string) => void;
}

export const NavList: React.FC<NavListProps> & { NavOption: React.FC<NavOptionProps> } = ({
  width,
  appear,
  children,
  onSelect,
  selected
}) => {
  const container = useAppearFrom(appear);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const resizeOvserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const containerWidth = entry.target.getBoundingClientRect().width;

        if (containerWidth < 200) {
          setMobileView(true);
        } else {
          setMobileView(false);
        }
      }
    });

    if (container.current) {
      resizeOvserver.observe(container.current);
    }

    return () => resizeOvserver.disconnect();
  }, [container]);

  return (
    <OptionListContext.Provider value={{ mobileView, onSelect, selected }}>
      <div ref={container} className={`flex flex-col gap-2`} style={{ width }}>
        {children}
      </div>
    </OptionListContext.Provider>
  );
};

NavList.NavOption = NavOption;
