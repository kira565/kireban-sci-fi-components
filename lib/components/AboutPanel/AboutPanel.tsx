import { ReactNode } from 'react';
import { AboutHeader, AvatarPanel, Barcode } from '@/main';
import photo from '@assets/kireban.png';
import useSciFiCode from '@/hooks/useSciFiCode';

export interface AboutPanelProps {
  width?: string;
  height?: string;
  className?: string;
  children?: ReactNode;
  headerText?: string;
}

export const AboutPanel: React.FC<AboutPanelProps> = ({
  className,
  width,
  height,
  children,
  headerText
}) => {
  return (
    <div
      className={
        className
          ? className
          : 'dark:text-white text-black font-[Oxanium] border-[0.5px] border-evaTextWarning p-1'
      }
      style={{ width, height }}>
      <div className="flex justify-between">
        <div className="left w-[100%] sm:w-[60%]">
          <div className="flex">
            <AboutHeader
              text={headerText}
              upperHeaderText={'STATION CREW PROFILE CODE ' + useSciFiCode(322)}
              lowerHeaderText={'SCANING...'}
              appear="left"
            />
            <div className="hidden md:inline-block mt-[1.25rem]">
              <div className="w-[195px]">
                <Barcode appear="top" />
              </div>
            </div>
          </div>
        </div>
        <div className="right hidden sm:inline-block">
          <AvatarPanel
            appear="right"
            image={<img src={photo} width={'250px'} height={'250px'} alt="_avatar"></img>}
          />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
