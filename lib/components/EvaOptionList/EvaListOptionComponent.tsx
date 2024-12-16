import useSciFiCode from "../hooks/useSciFiCode";

export interface EvaListOptionProps {
    title: string;
    clickHandler: () => void;
    sciFiCode: number,
    isActive: boolean
}

const EvaListOption: React.FC<EvaListOptionProps> = ({ title, sciFiCode, isActive }) => {
  const code = useSciFiCode(sciFiCode)
  return (
    <div 
      className={`flex flex-row gap-2 h-[45px] items-center text-white cursor-pointer group 
        ${isActive ? 'bg-[#0F172A] text-white' : ''}  // Apply styles for active state
      `}
    >
      {/* Left Yellow Element */}
      <div className="w-[2.5%] h-full bg-evaTextWarning trapezoid">
        <div className="rotate-90 text-[0.45rem] text-nowrap text-white font-bold m-1">{code}</div>
      </div>

      {/* Group for all other elements */}
      <div 
        className={`h-full w-full flex items-center gap-2 border-r transition-all duration-300 ease-in-out 
          ${isActive ? 'bg-[#0F172A] text-white' : 'group-hover:bg-white group-hover:text-[#0F172A]'} 
        `}
      >
        {/* Title */}
        <div className="font-bold w-full border-b h-full">{title}</div>

        {/* SciFi Code & Status */}
        <div className="text-[0.5rem] text-nowrap mr-2 font-bold">UNIT: {code} AV-OK</div>

        {/* Hover Indicator */}
        <div 
          className={`w-[10px] h-[5px] mr-10 mt-auto 
            ${isActive ? 'bg-white' : 'group-hover:bg-[#0F172A]'}
          `}
        ></div>
      </div>
    </div>
  );
}

export default EvaListOption