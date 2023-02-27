import { Link } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wrapper px-[20px] pt-[100px]">
      <h1 className="mb-[30px] text-3xl font-bold">
        Canvas Image Color Change
      </h1>
      <div className="fixed left-0 right-0 top-0">
        <ul className="flex justify-center gap-[20px] text-[18px] font-bold">
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/left">Left</Link>
          </li>
          <li>
            <Link to="/top">Top</Link>
          </li>
          <li>
            <Link to="/right">Right</Link>
          </li>
          <li>
            <Link to="/bottom">Bottom</Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default Layout;
