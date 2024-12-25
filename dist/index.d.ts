export declare const Card: React.FC<CardProps>;

declare interface CardProps {
    headBlockChildren: React.ReactNode[];
    mainBlockChildren: React.ReactNode[];
    height: string;
    width: string;
    borderColor: string;
    textColor: string;
    animated: boolean;
    icon?: string;
}

export declare const Circle: React.FC<CircleProps>;

declare interface CircleProps {
}

export declare const EvaBorderPanel: React.FC<EvaBorderPanelProps>;

declare interface EvaBorderPanelProps {
    children: React.ReactNode;
    mode?: 'warning' | 'danger';
    pulseAnimation?: boolean;
}

declare interface EvaListOptionProps {
    title: string;
    clickHandler: () => void;
    sciFiCode: number;
    isActive: boolean;
}

export declare const EvaOptionList: React.FC<EvaOptionListProps>;

declare interface EvaOptionListProps {
    options: EvaListOptionProps[];
    width?: string;
}

export declare const EvaProgressBar: React.FC<EvaProgressBarProps>;

declare interface EvaProgressBarProps {
    barsCount: number;
    currentBarIndex: number;
}

export declare const EvaTilePanel: React.FC<EvaTilePanelProps>;

declare interface EvaTilePanelProps {
    rowsCount: number;
    tilesPerRowCount: number;
    animationActive?: boolean;
}

export declare const EvaUnitBox: React.FC<EvaUnitBoxProps>;

declare interface EvaUnitBoxProps {
    unitNumber: string;
    subjectName: string;
}

export declare const GeometricLayout: React.FC<GeometricLayoutProps>;

declare interface GeometricLayoutProps {
    children: React.ReactNode[];
}

export { }
