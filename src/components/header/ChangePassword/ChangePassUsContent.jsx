import Image from "next/image";
import React from "react";
import shape37 from "@/assets/img/shape/37.png";

import ChangePassword from "./ChangePassword";

const ChangePassUsContent = () => {
  return (
    <>
      <div className={`contact-style-one-area overflow-hidden default-padding`}>
        <div className="contact-shape">
          <Image src={shape37} alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="row align-center">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "50vh" }}
            >
              <div className="contact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15">
                <div className="contact-form-style-one">
                  <h2 className="sub-title">Change Password</h2>
                  <ChangePassword />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassUsContent;
