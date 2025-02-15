import Image from "next/image";
import React from "react";
import shape37 from "@/assets/img/shape/37.png";
import logo from "../../../../public/assets/img/illustration/5.png";

import ContactInfo from "@/components/contact/ContactInfo";
import Details from "./Details";

const DetailsUsContent = () => {
  return (
    <>
      <div className={`contact-style-one-area overflow-hidden default-padding`}>
        <div className="contact-shape">
          <Image src={shape37} alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="row align-center">
            <div className="contact-stye-one col-lg-5 mb-md-50 mb-xs-20">
              {/* <ContactInfo /> */}
              <Image src={logo} width={350} height={350} />
            </div>
            <div className="contact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15">
              <div className="contact-form-style-one">
                <h2 className="sub-title">Details</h2>

                <Details />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsUsContent;
