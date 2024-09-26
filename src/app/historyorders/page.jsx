import HistoryOrders from "@/components/header/Orders/HistoryOrders/HistoryOrders";
import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import React from "react";

export const metadata = {
  title: "History Orders",
};

const NewOrdersComponent = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="History" title="History">
        <HistoryOrders />
      </LayoutStyle7>
    </>
  );
};

export default NewOrdersComponent;
