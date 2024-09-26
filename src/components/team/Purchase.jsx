import React from "react";
import ".././../../public/assets/css/table.css";

const Purchase = () => {
  const data = [
    {
      description: "Onetime pass 29.99",
      paymentMethod: "Stripe",
      paymentStatus: "Paid",
      name: "65",
      pricePerItem: "29.99",
      price: "29.99",
      boxQuantity: "1",
      createdDate: "10/5/2023 2:52:29 PM",
    },
    {
      description: "5 time pass 24.99 each",
      paymentMethod: "Stripe",
      paymentStatus: "Paid",
      name: "65",
      pricePerItem: "24.99",
      price: "124.95",
      boxQuantity: "5",
      createdDate: "10/5/2023 2:58:23 PM",
    },
    {
      description: "10 time pass 19.99 each",
      paymentMethod: "Stripe",
      paymentStatus: "-",
      name: "65",
      pricePerItem: "19.99",
      price: "199.9",
      boxQuantity: "10",
      createdDate: "10/5/2023 2:59:50 PM",
    },
    {
      description: "Onetime pass 29.99",
      paymentMethod: "Stripe",
      paymentStatus: "Paid",
      name: "65",
      pricePerItem: "29.99",
      price: "29.99",
      boxQuantity: "1",
      createdDate: "10/5/2023 2:52:29 PM",
    },
    {
      description: "5 time pass 24.99 each",
      paymentMethod: "Stripe",
      paymentStatus: "Paid",
      name: "65",
      pricePerItem: "24.99",
      price: "124.95",
      boxQuantity: "5",
      createdDate: "10/5/2023 2:58:23 PM",
    },
    {
      description: "10 time pass 19.99 each",
      paymentMethod: "Stripe",
      paymentStatus: "-",
      name: "65",
      pricePerItem: "19.99",
      price: "199.9",
      boxQuantity: "10",
      createdDate: "10/5/2023 2:59:50 PM",
    },
    {
      description: "Onetime pass 29.99",
      paymentMethod: "Stripe",
      paymentStatus: "Paid",
      name: "65",
      pricePerItem: "29.99",
      price: "29.99",
      boxQuantity: "1",
      createdDate: "10/5/2023 2:52:29 PM",
    },
    {
      description: "5 time pass 24.99 each",
      paymentMethod: "Stripe",
      paymentStatus: "Paid",
      name: "65",
      pricePerItem: "24.99",
      price: "124.95",
      boxQuantity: "5",
      createdDate: "10/5/2023 2:58:23 PM",
    },
    {
      description: "10 time pass 19.99 each",
      paymentMethod: "Stripe",
      paymentStatus: "-",
      name: "65",
      pricePerItem: "19.99",
      price: "199.9",
      boxQuantity: "10",
      createdDate: "10/5/2023 2:59:50 PM",
    },
    {
      description: "Onetime pass 29.99",
      paymentMethod: "Stripe",
      paymentStatus: "Paid",
      name: "65",
      pricePerItem: "29.99",
      price: "29.99",
      boxQuantity: "1",
      createdDate: "10/5/2023 2:52:29 PM",
    },
    {
      description: "5 time pass 24.99 each",
      paymentMethod: "Stripe",
      paymentStatus: "Paid",
      name: "65",
      pricePerItem: "24.99",
      price: "124.95",
      boxQuantity: "5",
      createdDate: "10/5/2023 2:58:23 PM",
    },
    {
      description: "10 time pass 19.99 each",
      paymentMethod: "Stripe",
      paymentStatus: "-",
      name: "65",
      pricePerItem: "19.99",
      price: "199.9",
      boxQuantity: "10",
      createdDate: "10/5/2023 2:59:50 PM",
    },
    {
      description: "Onetime pass 29.99",
      paymentMethod: "Stripe",
      paymentStatus: "Paid",
      name: "65",
      pricePerItem: "29.99",
      price: "29.99",
      boxQuantity: "1",
      createdDate: "10/5/2023 2:52:29 PM",
    },
    {
      description: "5 time pass 24.99 each",
      paymentMethod: "Stripe",
      paymentStatus: "Paid",
      name: "65",
      pricePerItem: "24.99",
      price: "124.95",
      boxQuantity: "5",
      createdDate: "10/5/2023 2:58:23 PM",
    },
    {
      description: "10 time pass 19.99 each",
      paymentMethod: "Stripe",
      paymentStatus: "-",
      name: "65",
      pricePerItem: "19.99",
      price: "199.9",
      boxQuantity: "10",
      createdDate: "10/5/2023 2:59:50 PM",
    },
  ];

  return (
    <div className="table-container">
      <div className="balance"> BALANCE : 232</div>

      <table className="custom-table mt-50">
        <thead>
          <tr>
            <th>Description</th>
            <th>Payment Method</th>
            <th>Payment Status</th>
            <th>Name</th>
            <th>Price Per Item</th>
            <th>Price</th>
            <th>Box Quantity</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.paymentMethod}</td>
              <td>{item.paymentStatus}</td>
              <td>{item.name}</td>
              <td>{item.pricePerItem}</td>
              <td>{item.price}</td>
              <td>{item.boxQuantity}</td>
              <td>{item.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ width: 100, height: 100 }}></div>
    </div>
  );
};

export default Purchase;
