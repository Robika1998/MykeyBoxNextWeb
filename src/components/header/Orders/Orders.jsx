"use client";
import React, { useRef, useEffect } from "react";
import "../../../../public/assets/css/styleOrders.css";
import Link from "next/link";
import Image from "next/image";
import newOrder from "../../../../public/assets/img/order/neworder.png";
import activeorder from "../../../../public/assets/img/order/activeorder.png";
import historyorder from "../../../../public/assets/img/order/historyorder.png";

export default function Orders() {
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.scrollIntoView({ behavior: "smooth", block: "center" });

    usernameRef.current.focus();
  }, []);

  return (
    <div className="container-fluid h-50 orders-container">
      <div className="row h-100 align-items-center justify-content-center">
        <div className="col-md-3 d-flex align-items-center justify-content-center ">
          <div className="card orders-card text-center">
            <div className="card-body">
              <h5 className="card-title sub-title">New Order</h5>
              {/* <p className="card-text">Create a new order.</p> */}
              <div
                style={{
                  marginBottom: 10,
                }}
                ref={usernameRef}
              >
                <Image src={newOrder} />
              </div>

              <Link href="/neworders">
                <span className="btn btn-primary orders-btn">Create</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-3 d-flex align-items-center justify-content-center">
          <div className="card orders-card text-center">
            <div className="card-body">
              <h5 className="card-title sub-title">Active Orders</h5>
              {/* <p className="card-text ">View active orders.</p> */}
              <div style={{ marginBottom: 10 }}>
                <Image src={activeorder} />
              </div>

              <Link href="/activeorders">
                <span className="btn btn-primary orders-btn">View</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-3 d-flex align-items-center justify-content-center">
          <div className="card orders-card text-center">
            <div className="card-body">
              <h5 className="card-title sub-title">History</h5>
              {/* <p className="card-text">Check order history.</p> */}
              <div style={{ marginBottom: 10 }}>
                <Image src={historyorder} />
              </div>

              <Link href="/historyorders">
                <span className="btn btn-primary orders-btn">View</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
