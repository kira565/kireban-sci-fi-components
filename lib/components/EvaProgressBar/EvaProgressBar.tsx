import { ReactNode } from 'react';

export interface EvaProgressBarProps {
  barsCount: number;
  currentBarIndex: number;
}

export const EvaProgressBar: React.FC<EvaProgressBarProps> = ({ barsCount, currentBarIndex }) => {
  function renderBars(): ReactNode[] {
    const arr: ReactNode[] = [];

    for (let i = 0; i < barsCount; i++) {
      arr.push(
        <div
          key={i}
          className={`h-full w-[7px] rounded-md bg-evaTextDanger glowedDanger ${
            i < currentBarIndex ? 'visible' : 'hidden'
          }`}></div>
      );
    }

    return arr;
  }

  return (
    <div className={`h-[135px] flex flex-col`} style={{ width: `${barsCount * 10}px` }}>
      <div className="h-[15px] flex justify-between">
        <div className="warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']">
          | +0.0 |
        </div>
        <div className="warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']">
          | +50.0 |
        </div>
        <div className="danger text-evaTextDanger text-xs font-[600] h-full font-['RobotoCondensed']">
          <span className="">| CAUTION</span>
          <span> | +100.0 |</span>
        </div>
      </div>
      <div className={`h-[105px] flex flex-row overflow-hidden gap-[3px]`}>{renderBars()}</div>
      <div className="h-[15px]"></div>
    </div>
  );
};
