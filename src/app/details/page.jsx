import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import React from "react";
import DetailsUsContent from "../../components/header/Details/DetailsUsContent";

export const metadata = {
  title: "Details",
};

const DetailsComponent = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="Details" title="Details">
        <DetailsUsContent />
        {/* <ContactMap /> */}
      </LayoutStyle7>
    </>
  );
};

export default DetailsComponent;
