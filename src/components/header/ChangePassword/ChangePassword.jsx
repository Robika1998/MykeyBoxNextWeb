"use client";
import React, { useRef, useEffect } from "react";
import { toast } from "react-toastify";
import "../../../../public/assets/css/chackbox.css";

const ChangePassword = () => {
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.scrollIntoView({ behavior: "smooth", block: "center" });

    usernameRef.current.focus();
  }, []);

  const handleForm = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Registered successful");
  };

  return (
    <>
      <form className="login-form" onSubmit={handleForm}>
        <div className="row">
          <div className="col-lg-12 mt-3">
            <div className="form-group">
              <input
                className="form-control"
                id="CurrentPassword"
                name="Current Password"
                placeholder="Current Password*"
                type="password"
                autoComplete="off"
                required
                ref={usernameRef}
              />
              <span className="alert-error"></span>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="New-Password"
                name="New Password"
                placeholder="New Password*"
                type="password"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="Confirm-Password"
                name="Confirm Password"
                placeholder="Confirm Password*"
                type="password"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mt-5">
            <button type="submit" name="submit" id="submit">
              <i className="fa fa-paper-plane"></i> Submit
            </button>
          </div>
        </div>
        <div className="col-lg-12 alert-notification">
          <div id="message" className="alert-msg"></div>
        </div>
      </form>
    </>
  );
};

export default ChangePassword;
