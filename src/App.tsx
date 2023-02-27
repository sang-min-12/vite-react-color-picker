import React, { useEffect, useState } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Main from "./pages";
import Left from "./pages/Left";
import Top from "./pages/Top";
import Right from "./pages/Right";
import Bottom from "./pages/Bottom";
import Layout from "./pages/_layout";

type directionIndexType = 0 | 1 | 2 | 3;
const slideFromDirection = {
  0: "right",
  1: "left",
  2: "top",
  3: "bottom",
};

function App() {
  const location = useLocation();
  const [directionIndex, setDirectionIndex] = useState<directionIndexType>(0);
  const direction = slideFromDirection[directionIndex];

  useEffect(() => {
    console.log(location.pathname);
    const random = Math.floor(Math.random() * 4) as directionIndexType;
    setDirectionIndex(random);
    console.log(direction);
    setTimeout(() => {
      debugger;
    }, 500);
  }, [location]);

  return (
    <Layout>
      <TransitionGroup
        className={"transitions-wrapper"}
        childFactory={(child) => {
          return React.cloneElement(child, {
            classNames: direction,
          });
        }}
      >
        <CSSTransition
          key={location.pathname}
          classNames={"right"}
          timeout={500}
        >
          <Routes location={location}>
            <Route path={"/"} element={<Main />} />
            <Route path={"/left"} element={<Left />} />
            <Route path={"/top"} element={<Top />} />
            <Route path={"/right"} element={<Right />} />
            <Route path={"/bottom"} element={<Bottom />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
}

export default App;
