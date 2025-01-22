import EvaTilePanel from '../EvaTilePanel/EvaTilePanel';
import LayoutArtifact from './LayoutArtifact';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

export interface GeometricLayoutProps {
  children: React.ReactNode[];
}

const GeometricLayout: React.FC<GeometricLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100 dark:bg-darkGrayBg theme-text font-[RobotoCondensed] ">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-gray-100 dark:bg-darkGrayBg w-full shadow-md z-10 flex gap-2 items-center border-b-evaTextDanger glowed-border-b">
        <div className="ml-2 mt-2 hidden md:block z-10">
          <EvaTilePanel tilesPerRowCount={2} rowsCount={2} />
        </div>
        <div
          className="font-bold flex items-center text-[40px] font-[Eva]"
          style={{ transform: 'scaleX(0.79)' }}>
          NEON GENESIS EVANGELION
        </div>
      </div>

      {/* Fixed Artifacts */}
      <div className="fixed bottom-3 left-3">
        <LayoutArtifact />
      </div>
      <div className="fixed bottom-3 right-3 [transform:rotateY(180deg)]">
        <LayoutArtifact />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto flex items-center justify-center text-center px-4 pt-8 pb-8">
        <div className="content mx-auto max-w-screen-md text-2xl md:text-1xl font-bold">
          {/* Children or content */}
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default GeometricLayout;
