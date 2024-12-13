export interface EvaBorderPanelProps {
  children: React.ReactNode;
  mode: "warning" | "danger";
}

const EvaBorderPanel: React.FC<EvaBorderPanelProps> = ({
  children,
  mode,
}) => {
  return (
    <div className="piece animate-pulse">
      <div
        className={`rounded-md border-solid border-[3px] ${
          mode === "warning"
            ? "text-evaTextWarning text-shadow-warning"
            : "text-evaTextDanger text-shadow-danger"
        } border-evaTextWarning ${mode} label`}
      >
        {children}
      </div>
    </div>
  );
};

export default EvaBorderPanel;