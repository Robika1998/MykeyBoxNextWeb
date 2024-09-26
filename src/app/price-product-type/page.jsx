import PriceProductType from "@/components/header/PriceProductType/PriceProductType";
import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import React from "react";

export const metadata = {
  title: "Product Type",
};

const PriceProductTypeComponent = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="Product Type" title="Product Type">
        <div style={{ width: "100%", height: "50%" }}>
          <PriceProductType />
        </div>
      </LayoutStyle7>
    </>
  );
};

export default PriceProductTypeComponent;
