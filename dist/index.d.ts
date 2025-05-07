import { default as default_2 } from 'react';
import { ReactNode } from 'react';
import { RefObject } from 'react';

export declare const AboutHeader: React.FC<AboutHeaderProps>;

declare interface AboutHeaderProps {
    text?: string;
    colorSchema?: string;
    upperHeaderText?: string;
    lowerHeaderText?: string;
    appear?: 'top' | 'left' | 'bottom' | 'right';
    height?: string;
    width?: string;
}

declare type AppearDirection = 'top' | 'left' | 'bottom' | 'right';

export declare const AvatarPanel: React.FC<AvatarPanelProps>;

declare interface AvatarPanelProps {
    imageSrc?: string;
    colorSchema?: string;
    appear?: AppearDirection;
    image: React.ReactNode;
}

export declare const Barcode: React.FC<BarcodeProps>;

declare interface BarcodeProps {
    fill?: string;
    width?: string;
    appear?: 'top' | 'left' | 'bottom' | 'right';
    opacity?: string;
}

export declare const ButtonFinger: React.FC<ButtonFingerProps>;

declare interface ButtonFingerProps {
    width: string;
    height: string;
    onClick?: (event: React.MouseEvent) => void;
    /**
     * Flag for single use button behaviour
     */
    hideAfterClick?: boolean;
    /**
     * This callback will be called after dissapearing animation completed, you can destroy component then
     * @returns
     */
    destroyCallback?: () => void;
    delayedAppearing?: number;
}

export declare const CircleIndicator: React.FC<CircleIndicatorProps>;

declare interface CircleIndicatorProps {
    children?: React.ReactNode;
    primaryColour?: string;
    secondaryColour?: string;
    width?: string;
    height?: string;
    sm?: boolean;
    reverted?: boolean;
    onAnimationComplete?: () => void;
    animationDelay?: number;
}

export declare const CompanyGeneralInfo: default_2.FC<CompanyGeneralInfoProps>;

declare interface CompanyGeneralInfoProps {
    width?: string;
    height?: string;
    colourSchema?: string;
    secondaryColourSchema?: string;
    bottomText?: string;
    children?: ReactNode;
    companyLogo?: ReactNode;
    leftBlockWidth?: string;
    augBorderWidth?: string;
    topleftAug?: string;
    logoWidth?: string;
    logoHeight?: string;
    onClick?: (event: default_2.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    btnTitle?: string;
    appearAnimation?: boolean;
    isAnimationStarted?: boolean;
    firstAnimationDelay?: number;
    backdropBlur?: boolean;
}

export declare const EvaBorderPanel: React.FC<EvaBorderPanelProps>;

declare interface EvaBorderPanelProps {
    children: React.ReactNode;
    mode?: 'warning' | 'danger';
    pulseAnimation?: boolean;
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

export declare const JpMap: React.FC<JpMapProps>;

declare interface JpMapProps {
    width?: string;
    height?: string;
    bgColor?: string;
    appear?: AppearDirection;
}

export declare const LoadingBattery: React.FC<LoadingBatteryProps>;

declare interface LoadingBatteryProps {
    width?: string;
    height?: string;
    appear?: 'top' | 'left' | 'bottom' | 'right';
    chargingDurationSec?: number;
    chargingCompleted?: () => void;
    needHideAfterComplete?: boolean;
}

export declare const NavList: React.FC<NavListProps> & {
    NavOption: React.FC<NavOptionProps>;
};

declare interface NavListProps {
    width?: string;
    appear?: AppearDirection;
    children: ReactNode;
    selected: string;
    onSelect?: (value?: string) => void;
}

declare interface NavOptionProps {
    title: string;
    sciFiCode: number;
    value?: string;
    image?: ReactNode;
}

export declare const Panel: React.FC<PanelProps>;

declare interface PanelProps {
    width?: string;
    height?: string;
    colorSchema?: string;
    leftBlockContent?: ReactNode;
    leftBlockWidth?: string;
    children?: ReactNode;
    code?: number;
}

export declare const SsiState: React.FC<SsiStateProps>;

declare interface SsiStateProps {
    width?: string;
    height?: string;
    appear?: AppearDirection;
    showCoordinates?: boolean;
}

export declare function useAppearFrom(direction?: AppearDirection): RefObject<null>;

/**
 * Hook to generate a futuristic sci-fi code.
 * @param index {number} - The index of the component.
 * @returns {string} A unique sci-fi code string, e.g., "U-1S25".
 */
export declare const useSciFiCode: (index: number) => string;

export { }
