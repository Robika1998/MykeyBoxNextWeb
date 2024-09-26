import ActiveOrders from "@/components/header/Orders/ActiveOrders/ActiveOrders";
import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import React from "react";

export const metadata = {
  title: "Active Orders",
};

const ActiveOrdersComponent = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="Active Orders" title="Active Orders">
        <ActiveOrders />
      </LayoutStyle7>
    </>
  );
};

export default ActiveOrdersComponent;
