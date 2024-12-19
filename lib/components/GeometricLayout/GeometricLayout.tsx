import EvaTilePanel from '../EvaTilePanel/EvaTilePanel';
import LayoutArtifact from './LayoutArtifact';

export interface GeometricLayoutProps {
  children: React.ReactNode[];
}

const GeometricLayout: React.FC<GeometricLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100 dark:bg-darkGrayBg theme-text font-[RobotoCondensed]">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-gray-100 dark:bg-darkGrayBg w-full shadow-md z-10 flex gap-2 items-center">
        <div className="ml-2 mt-2">
          <EvaTilePanel tilesPerRowCount={2} rowsCount={2} />
        </div>
        <span className="h-2 text-xl">Header section</span>
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
