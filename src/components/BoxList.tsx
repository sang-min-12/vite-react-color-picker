import Heading from "./Heading";

const BoxList = (
  {
    title,
    className,
    children
  }: {
    title: string,
    className?: string,
    children: React.ReactNode,
  }
) => {
  return (
    <div className={`flex-1 flex flex-col ${className}`}>
      <Heading
        level="h2" 
        className="flex-none text-center bg-[#ddd] py-2"
      >
        {title}
      </Heading>
      <div 
        className="flex-1 flex justify-center items-center p-3 border border-t-0"
      >
        {children}
      </div>
    </div>
  );
};

export default BoxList;