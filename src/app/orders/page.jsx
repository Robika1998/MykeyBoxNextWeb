import Orders from "@/components/header/Orders/Orders";
import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import React from "react";

export const metadata = {
  title: "Orders",
};

const OrdersComponent = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="Orders" title="Orders">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 100,
            backgroundColor: "#dcdcdc",
          }}
        >
          <Orders />
        </div>
      </LayoutStyle7>
    </>
  );
};

export default OrdersComponent;
