import './Card.css';
export interface CardProps {
  children: React.ReactNode[];
  height: string;
  width: string;
  borderColor: string;
  textColor: string;
  animated: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  width,
  height,
  borderColor,
  textColor,
  animated
}) => {
  return (
    <div className="card-container relative" style={{ width, height }}>
      <div
        data-augmented-ui="bl-clip tr-clip br-clip-x border"
        className={`w-full h-full card text-${borderColor} ${animated ? 'animated' : ''}`}
      >
        <div className={`text-${textColor}`}>{children}</div>
      </div>
      <div
        className={`artifact text-${borderColor} ${animated ? 'animated' : ''}`}
        data-augmented-ui="tl-clip border"
      ></div>
    </div>
  );
};

export default Card;
