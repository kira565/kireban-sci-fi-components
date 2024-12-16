export interface GeometricLayoutProps {
    children: React.ReactNode[];
}

const GeometricLayout: React.FC<GeometricLayoutProps> = ({children}) => {
  return (
<div className="relative w-screen h-screen p-2 text-white">
  <div className="fixed top-1 left-1">1</div>
  <div className="fixed bottom-1 left-1">2</div>
  <div className="fixed bottom-1 right-1">3</div>

  {/* Content with spacing to avoid overflow */}
  <div className="flex items-center justify-center h-full text-center px-4 pt-8 pb-8">
    <div className="content mx-auto max-w-screen-md text-2xl md:text-1xl font-bold">
      {/* Children or content */}
      <div className="content h-full">
        {children}
      </div>
    </div>
  </div>
</div>
  );
};

export default GeometricLayout;
