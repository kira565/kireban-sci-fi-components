import { ReactNode } from 'react';
import { AboutHeader, AvatarPanel, Barcode, Panel } from '@/main';
import photo from '@assets/kireban.png';
import useSciFiCode from '@/hooks/useSciFiCode';
import profile from '@assets/svg/icons/profile.svg';
import drill from '@assets/svg/icons/docdrill.svg';
import citadel from '@assets/svg/icons/citadel.svg';
import pin from '@assets/svg/icons/pin.svg';

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
          : 'dark:text-white text-black font-[Oxanium] border-[0.5px] border-evaTextWarning p-4 bg-crossGrid bg-backgroundSize bg-repeat'
      }
      style={{ width, height }}>
      <div className="flex justify-between">
        <div className="left w-[100%] sm:w-[60%]">
          <div className="flex">
            <AboutHeader
              text={headerText}
              upperHeaderText={'STATION CREW PROFILE CODE ' + useSciFiCode(322)}
              lowerHeaderText={'PROFILE SCANNED'}
              appear="left"
            />
            <div className="hidden md:inline-block mt-[1.25rem]">
              <div className="w-[195px]">
                <Barcode appear="top" />
              </div>
            </div>
          </div>
          <div className="blocks grid grid-rows-2 grid-cols-2 gap-7 mt-7">
            <div>
              <Panel
                height="55px"
                code={23}
                leftBlockContent={
                  <div className="rotate-90 text-[0.47rem] text-nowrap font-semibold p-[0.2rem] pt-1">
                    UE- 1 TTL
                  </div>
                }>
                <div className="flex flex-col justify-between h-full">
                  <div className="flex gap-1 h-full">
                    <img className="h-[50%]" src={profile}></img>
                    <div className="">
                      <div className="text-md font-semibold h-[60%]">NAME</div>
                      <div className="h-[40%] text-sm">KIRILL KAGDIN</div>
                    </div>
                  </div>
                </div>
              </Panel>
            </div>
            <div>
              <Panel
                height="55px"
                code={24}
                leftBlockContent={
                  <div className="rotate-90 text-[0.47rem] text-nowrap font-semibold p-[0.2rem] pt-1">
                    UE- 12 TTL
                  </div>
                }>
                <div className="flex flex-col justify-between h-full">
                  <div className="flex gap-1 h-full">
                    <img className="h-[50%]" src={drill}></img>
                    <div className="">
                      <div className="text-md font-semibold h-[60%]">OCCUPATION</div>
                      <div className="h-[40%] text-sm">FRONTEND DEVELOPER</div>
                    </div>
                  </div>
                </div>
              </Panel>
            </div>
            <div>
              <Panel
                height="55px"
                code={25}
                leftBlockContent={
                  <div className="rotate-90 text-[0.47rem] text-nowrap font-semibold p-[0.2rem] pt-1">
                    UE- 6 TTL
                  </div>
                }>
                <div className="flex flex-col justify-between h-full">
                  <div className="flex gap-1 h-full">
                    <img className="h-[50%]" src={citadel}></img>
                    <div className="">
                      <div className="text-md font-semibold h-[60%]">CORPORATION</div>
                      <div className="h-[40%] text-sm">3CX</div>
                    </div>
                  </div>
                </div>
              </Panel>
            </div>
            <div>
              <Panel
                height="55px"
                code={26}
                leftBlockContent={
                  <div className="rotate-90 text-[0.47rem] text-nowrap font-semibold p-[0.2rem] pt-1">
                    UE- 2 TTL
                  </div>
                }>
                <div className="flex flex-col justify-between h-full">
                  <div className="flex gap-1 h-full">
                    <img className="h-[50%]" src={pin}></img>
                    <div className="">
                      <div className="text-md font-semibold h-[60%]">GEOPOSITION</div>
                      <div className="h-[40%] text-sm">CYPRUS, NICOSIA</div>
                    </div>
                  </div>
                </div>
              </Panel>
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
      <div className="mt-7">{children}</div>
    </div>
  );
};
