export interface EvaBorderPanelProps {
  children: React.ReactNode;
  mode?: 'warning' | 'danger';
  pulseAnimation?: boolean;
}

export const EvaBorderPanel: React.FC<EvaBorderPanelProps> = ({
  children,
  mode = 'warning',
  pulseAnimation = true
}) => {
  return (
    <div className={`piece ${pulseAnimation && 'animate-pulse'}`}>
      <div
        className={`glowedBorder ${
          mode === 'warning'
            ? 'text-evaTextWarning text-shadow-warning border-evaTextWarning'
            : 'text-evaTextDanger text-shadow-danger border-evaTextDanger'
        }  ${mode} label`}>
        {children}
      </div>
    </div>
  );
};
