export interface ShortInfoPanelProps {
  width?: string;
  height?: string;
  labelWidth?: string;
  colorSchema?: string;
}

export const ShortInfoPanel: React.FC<ShortInfoPanelProps> = ({
  width,
  colorSchema = '#fa0',
  labelWidth,
  height
}) => {
  return (
    <div className="relative" style={{ width, height }}>
      <div
        data-augmented-ui="br-clip border"
        className="absolute left-0 top-0"
        style={
          {
            width: labelWidth,
            '--aug-border-bg': colorSchema,
            '--aug-border-all': '0.8px',
            '--aug-br': '1.5rem'
          } as React.CSSProperties
        }>
        a
      </div>
      <div
        className="h-[100%]"
        data-augmented-ui="tl-clip-x border"
        style={
          {
            '--aug-border-bg': colorSchema,
            '--aug-tl-inset1': labelWidth,
            '--aug-border-all': '0.8px',
            '--aug-tl-inset': '1.5rem'
          } as React.CSSProperties
        }>
        a
      </div>
    </div>
  );
};
