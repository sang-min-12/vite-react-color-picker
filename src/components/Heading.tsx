const HeadingMap = {
  h1: {
    className: "text-3xl font-bold",
  },
  h2: {
    className: "text-2xl font-bold",
  },
  h3: {
    className: "text-xl font-bold",
  },
}

const Heading = (
  { 
    level = "h1",
    className,
    children,
    ...props
  }: {
    level: "h1" | "h2" | "h3",
    className?: string,
    children: React.ReactNode,
  }) => {
  const HeadingTag = `${level}` as keyof JSX.IntrinsicElements;
  const HeadingClass = HeadingMap[level].className;
  
  return (
    <HeadingTag className={`${HeadingClass} ${className}`} {...props}>
      {children}
    </HeadingTag>
  );
};

export default Heading;