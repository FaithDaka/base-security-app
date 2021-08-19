import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const index = ({ children }) => {
  const width = 230;
  const [xPosition, setX] = useState(-width);
  const [margin, setMargin] = useState(width);
  const [header, setHeader] = useState(width);

  const ToggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setMargin(width);
      setHeader(0);
    } else {
      setX(-width);
      setMargin(0);
      setHeader(-width);
    }
  };

  useEffect(() => {
    setX(0);
    setMargin(width);
    setHeader(0);
  }, []);
  return (
    <div className="" >
      <Sidebar width={width} xPos={xPosition}></Sidebar>
      <div style={{ marginLeft: `${margin}px` }} className="main-content">
      <Header toggle={ToggleMenu} margin={header}></Header>
      {children}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default index;
