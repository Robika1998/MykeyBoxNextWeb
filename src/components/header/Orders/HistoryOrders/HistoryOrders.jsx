"use client";
import React, { useState } from "react";
import "../../../../../public/assets/css/table.css";
import PDF from "../../../../../public/assets/img/document.png";
import Image from "next/image";

const HistoryOrders = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const data = [
    {
      vin: "3D7TT2HT3AG187154",
      carrier: "65",
      dealer: "Atlantic Auto Sales, LLC 3570 U.S. 501 Conway, SC 29526",
      boxId: "2352",
      transportRelease: "",
      orderStatus: "Key is not in box",
      date: "10/5/2023 2:52:29 PM",
      doorCode: "1234",
      lockerId: "LOCKER1",
      releaseOrderId: "ORDER123",
      pickUpInfo: "Pickup at front gate",
      deliveryInfo: "Delivery to warehouse",
      dateUpdated: "10/6/2023 10:00 AM",
    },
    {
      vin: "3D7TT2HT3AG187154",
      carrier: "423465",
      dealer: "Atlantic Auto Sales, LLC 3570 U.S. 501 Conway, SC 29526",
      boxId: "2352",
      transportRelease: "",
      orderStatus: "Key is not in box",
      date: "10/5/2023 2:52:29 PM",
      doorCode: "1234",
      lockerId: "LOCKER1",
      releaseOrderId: "ORDER123",
      pickUpInfo: "Pickup at front gate",
      deliveryInfo: "Delivery to warehouse",
      dateUpdated: "10/6/2023 10:00 AM",
    },
    {
      vin: "3D7TT2HT3AG187154",
      carrier: "535365",
      dealer: "Atlantic Auto Sales, LLC 3570 U.S. 501 Conway, SC 29526",
      boxId: "2352",
      transportRelease: "",
      orderStatus: "Key is not in box",
      date: "10/5/2023 2:52:29 PM",
      doorCode: "1234",
      lockerId: "LOCKER1",
      releaseOrderId: "ORDER123",
      pickUpInfo: "Pickup at front gate",
      deliveryInfo: "Delivery to warehouse",
      dateUpdated: "10/6/2023 10:00 AM",
    },
  ];

  return (
    <div className="table-container">
      <div className="balance"> BALANCE : 232</div>

      <table className="custom-table mt-50">
        <thead>
          <tr>
            <th>Vin</th>
            <th>Carrier</th>
            <th>Dealer</th>
            <th>Box ID</th>
            <th>Transport Release</th>
            <th>Order Status</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.vin}</td>
              <td>{item.carrier}</td>
              <td>{item.dealer}</td>
              <td>{item.boxId}</td>
              <td>
                <a
                  href={item.transportRelease}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={PDF}
                    style={{ width: 50, height: 50, marginLeft: 20 }}
                  />
                </a>
              </td>
              <td>{item.orderStatus}</td>
              <td>{item.date}</td>
              <td>
                <button
                  className="btn btn-primary"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 60,
                    height: 50,
                    borderRadius: 25,
                  }}
                  onClick={() => handleViewDetails(item)}
                >
                  <span>View Details</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {selectedItem && (
              <div>
                <h2>Order Details</h2>
                <p>
                  <strong>VIN:</strong> {selectedItem.vin}
                </p>
                <p>
                  <strong>Carrier:</strong> {selectedItem.carrier}
                </p>
                <p>
                  <strong>Dealer:</strong> {selectedItem.dealer}
                </p>
                <p>
                  <strong>Box ID:</strong> {selectedItem.boxId}
                </p>
                <p>
                  <strong>Transport Release:</strong>{" "}
                  {selectedItem.transportRelease}{" "}
                  <Image src={PDF} style={{ width: 30, height: 30 }} />
                </p>
                <p>
                  <strong>Order Status:</strong> {selectedItem.orderStatus}
                </p>
                <p>
                  <strong>Date:</strong> {selectedItem.date}
                </p>
                <p>
                  <strong>Door Code:</strong> {selectedItem.doorCode}
                </p>
                <p>
                  <strong>Locker ID:</strong> {selectedItem.lockerId}
                </p>
                <p>
                  <strong>Release Order ID:</strong>{" "}
                  {selectedItem.releaseOrderId}
                </p>
                <p>
                  <strong>Pick Up Information:</strong>{" "}
                  {selectedItem.pickUpInfo}
                </p>
                <p>
                  <strong>Delivery Information:</strong>{" "}
                  {selectedItem.deliveryInfo}
                </p>
                <p>
                  <strong>Date Updated:</strong> {selectedItem.dateUpdated}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <div style={{ width: 100, height: 100 }}></div>
    </div>
  );
};

export default HistoryOrders;
