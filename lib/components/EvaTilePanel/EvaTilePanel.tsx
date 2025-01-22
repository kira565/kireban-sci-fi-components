export interface EvaTilePanelProps {
  rowsCount: number;
  tilesPerRowCount: number;
  animationActive?: boolean;
}

const EvaTilePanel: React.FC<EvaTilePanelProps> = ({
  rowsCount,
  tilesPerRowCount,
  animationActive = false
}) => {
  function renderAllRowsAndTiles() {
    return Array(rowsCount)
      .fill(null)
      .map((_, idx) => {
        return (
          <div key={idx} className="hex-row rotate-method">
            {Array(tilesPerRowCount)
              .fill(null)
              .map((_, idx) => {
                return (
                  <div key={idx} className={`hex ${animationActive ? 'animation-active' : ''}`} />
                );
              })}
          </div>
        );
      });
  }

  return <div className="piece rotateMethod">{renderAllRowsAndTiles()}</div>;
};

export default EvaTilePanel;
