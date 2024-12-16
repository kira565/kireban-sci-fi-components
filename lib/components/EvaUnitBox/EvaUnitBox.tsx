export interface EvaUnitBoxProps {
  unitNumber: string,
  subjectName: string
}

const EvaUnitBox: React.FC<EvaUnitBoxProps> = ({unitNumber, subjectName}) => {
  return (
    <div className="grid grid-rows-3 p-2 h-[135px] w-auto text-evaTextWarning text-shadow-warning text-center bg-red-600 bg-opacity-20 border-2 border-evaTextDanger border-solid">
      <div className="text-xl font-[400] label">Subject</div>
      <div className="text-2xl font-[600] label">{unitNumber}</div>
      <div className="text-xl font-[400] label">{subjectName}</div>
    </div>
  );
};

export default EvaUnitBox