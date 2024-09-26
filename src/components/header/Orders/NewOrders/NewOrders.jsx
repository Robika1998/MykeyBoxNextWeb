"use client";
import React, { useRef, useEffect } from "react";
import { toast } from "react-toastify";

const NewOrders = () => {
  const dealersRef = useRef(null);

  useEffect(() => {
    dealersRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    dealersRef.current.focus();
  }, []);

  const handleForm = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Form submitted successfully");
  };

  return (
    <>
      <form
        className="contact-form p-4 shadow-lg rounded bg-light"
        onSubmit={handleForm}
      >
        <h3 className="text-center mb-4"></h3>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="dealers" className="sub-title">
                Dealers*
              </label>
              <input
                className="form-control form-control-lg rounded-pill"
                id="dealers"
                name="dealers"
                placeholder="Enter Dealer Name"
                type="text"
                ref={dealersRef}
                required
              />
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="orderId" className="sub-title">
                Order ID*
              </label>
              <input
                className="form-control form-control-lg rounded-pill"
                id="orderId"
                name="orderId"
                placeholder="Enter Order ID"
                type="text"
                required
              />
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="vin" className="sub-title">
                VIN*
              </label>
              <input
                className="form-control form-control-lg rounded-pill"
                id="vin"
                name="vin"
                placeholder="Enter VIN"
                type="text"
                required
              />
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="vehicle" className="sub-title">
                Vehicle*
              </label>
              <input
                className="form-control form-control-lg rounded-pill"
                id="vehicle"
                name="vehicle"
                placeholder="Enter Vehicle Info"
                type="text"
                required
              />
            </div>
          </div>

          <div className="col-lg-12 mb-3">
            <div className="form-group">
              <label htmlFor="pdfFile" className="sub-title">
                Transport Release*
              </label>
              <input
                className="form-control"
                id="pdfFile"
                name="pdfFile"
                type="file"
                accept=".pdf"
                required
              />
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="pickupInfo" className="sub-title">
                Pickup Information*
              </label>
              <textarea
                className="form-control form-control-lg rounded"
                id="pickupInfo"
                name="pickupInfo"
                placeholder="Enter Pickup Information"
                rows="3"
                required
              ></textarea>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="deliveryInfo" className="sub-title">
                Delivery Information*
              </label>
              <textarea
                className="form-control form-control-lg rounded"
                id="deliveryInfo"
                name="deliveryInfo"
                placeholder="Enter Delivery Information"
                rows="3"
                required
              ></textarea>
            </div>
          </div>

          <div className="col-lg-12 text-center">
            <button
              type="submit"
              name="submit"
              id="submit"
              className="btn btn-primary btn-lg rounded-pill px-5"
            >
              <i className="fa fa-paper-plane"></i> Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewOrders;
