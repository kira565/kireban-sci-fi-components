import SolarChargeSvg from '../../../assets/svg/solar-charge.svg?react';
import SolarGraph from '../../../assets/svg/graph.svg?react';

export interface LoadingBatteryProps {
  width?: string;
  height?: string;
}

export const Tile: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="h-3/4 w-[0.3rem] bg-green-500"></div>
      <div>{children}</div>
    </div>
  );
};

export const LoadingBattery: React.FC<LoadingBatteryProps> = ({
  width = '640px',
  height = '220px'
}) => {
  return (
    <div
      style={{ width, height }}
      className="border-evaTextWarning glowedBorder font-[Oxanium] text-white flex flex-col">
      <div className="flex flex-row h-3/4 p-1 gap-1">
        <div className="flex flex-col w-[48%]">
          <div className="text-4xl">SOLAR ENERGY</div>
          <div className="h-full">
            <SolarGraph />
          </div>
        </div>
        <div className="flex flex-row p-1 text-[0.85rem] justify-between w-[65%]">
          <div className="flex flex-col h-full justify-between">
            <Tile>SPEC-37.74</Tile>
            <Tile>PV-CAP 92.6</Tile>
            <Tile>SOL-CHR 55%</Tile>
          </div>
          <div className="flex flex-col h-full justify-between">
            <Tile>PHOTON-INT 8.9</Tile>
            <Tile>VOLT-REG 220</Tile>
            <Tile>AUX-ENG 12.5</Tile>
          </div>
          <div className="flex flex-col h-full justify-between">
            <Tile>SYN-SAT 99.4</Tile>
            <Tile>BATT-OPT 98.2%</Tile>
            <Tile>ION-FREQ 47.5</Tile>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <SolarChargeSvg></SolarChargeSvg>
      </div>
    </div>
  );
};
