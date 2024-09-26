import React from "react";
import FooterStyle1 from "../footer/FooterStyle1";

import HeaderStyle5 from "../header/HeaderStyle5";
import FooterStyle2 from "../footer/FooterStyle2";

const LayoutStyle2 = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <HeaderStyle5 />
        {children}
        <FooterStyle2 />
      </div>
    </>
  );
};

export default LayoutStyle2;
