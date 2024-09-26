import ChangePassUsContent from "@/components/header/ChangePassword/ChangePassUsContent";
import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import React from "react";

export const metadata = {
  title: "Change Password",
};

const DetailsComponent = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="Change Password" title="Change Password">
        <ChangePassUsContent />
        {/* <ContactMap /> */}
      </LayoutStyle7>
    </>
  );
};

export default DetailsComponent;
