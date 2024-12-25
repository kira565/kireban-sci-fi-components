import './Card.css';
export interface CardProps {
  headBlockChildren: React.ReactNode[];
  mainBlockChildren: React.ReactNode[];
  height: string;
  width: string;
  borderColor: string;
  textColor: string;
  animated: boolean;
  icon?: string;
}

const Card: React.FC<CardProps> = ({
  headBlockChildren,
  width,
  height,
  borderColor,
  textColor,
  mainBlockChildren,
  animated
}) => {
  return (
    <div className={`card-container relative`} style={{ width, height }}>
      <div
        data-augmented-ui={`bl-clip tr-clip br-clip-x bl-clip tl-clip-y border`}
        className={`w-full h-full card text-${borderColor} ${animated ? 'animated' : ''}`}>
        <div className={`text-${textColor} head-block`}>{headBlockChildren}</div>
        <div className={`text-${textColor} main-block'`}>{mainBlockChildren}</div>
      </div>
      <div
        className={`artifact text-${borderColor} ${animated ? 'animated' : ''}`}
        data-augmented-ui="tl-clip border"></div>
      <div className={`icon-artifact text-${borderColor}`} data-augmented-ui="br-clip border"></div>
    </div>
  );
};

export default Card;
