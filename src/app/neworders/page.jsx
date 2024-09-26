import NewOrders from "@/components/header/Orders/NewOrders/NewOrders";
import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import React from "react";

export const metadata = {
  title: "New Orders",
};

const NewOrdersComponent = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="New Orders" title="New Orders">
        <NewOrders />
      </LayoutStyle7>
    </>
  );
};

export default NewOrdersComponent;
