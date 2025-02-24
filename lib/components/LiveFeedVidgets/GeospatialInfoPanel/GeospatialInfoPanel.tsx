export interface GeospatialInfoPanelProps {
  width?: string;
  height?: string;
}

export const GeospatialInfoPanel: React.FC<GeospatialInfoPanelProps> = ({ width, height }) => {
  return (
    <div
      style={{ width, height }}
      className="flex border-[0.5px] border-opacity-50 border-evaTextWarning">
      <div className="w-[10%]"></div>
      <div className="w-[90%]"></div>
    </div>
  );
};
