import React from "react";

export interface EvaBorderPanelProps {
  children: React.ReactNode[];
  mode: "warning" | "danger";
  pulseAnimation?: boolean
}

const EvaBorderPanel: React.FC<EvaBorderPanelProps> = ({
  children,
  mode,
  pulseAnimation,
}) => {
  return (
    <div className={`piece ${pulseAnimation && 'animate-pulse'}`}>
      <div
        className={`rounded-md border-solid border-[3px] ${
          mode === "warning"
            ? "text-evaTextWarning text-shadow-warning border-evaTextWarning"
            : "text-evaTextDanger text-shadow-danger border-evaTextDanger"
        }  ${mode} label`}
      >
        {children}
      </div>
    </div>
  );
};

export default EvaBorderPanel;