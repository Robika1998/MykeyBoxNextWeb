import React from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
  return (
    <>
      <ul
        className={`nav navbar-nav  ${navbarPlacement}`}
        data-in="fadeInDown"
        data-out="fadeOutUp"
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          {/* <Link
            href="/about-us"
            className="dropdown-toggle"
            data-toggle="dropdown"
            onClick={toggleSubMenu}
          >
            About Us
          </Link> */}

          <Link href="/about-us">About Us</Link>

          {/* <ul className="dropdown-menu">
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/team-details/1">Team Details</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link href="/not-found">Error Page</Link>
            </li>
          </ul> */}
        </li>
        <li className="dropdown">
          <Link href="/project">Products</Link>
          {/* <Link
            href="project"
            className="dropdown-toggle"
            data-toggle="dropdown"
            onClick={toggleSubMenu}
          >
            Products
          </Link> */}
          {/* <ul className="dropdown-menu">
            <li>
              <Link href="/project">Project style one</Link>
            </li>
            <li>
              <Link href="/project-details/1">Project Details</Link>
            </li>
          </ul> */}
        </li>
        {/* <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Services</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/services">Services Version One</Link></li>
                        <li><Link href="/services-2">Services Version Two</Link></li>
                        <li><Link href="/services-details/1">Services Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Blog</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog-with-sidebar">Blog With Sidebar</Link></li>
                        <li><Link href="/blog-2-column">Blog Grid Two Colum</Link></li>
                        <li><Link href="/blog-3-column">Blog Grid Three Colum</Link></li>
                        <li><Link href="/blog-single/1">Blog Single</Link></li>
                        <li><Link href="/blog-single-with-sidebar/1">Blog Single With Sidebar</Link></li>
                    </ul>
                </li> */}
        <li>
          <Link href="/contact-us">contact</Link>
        </li>
        <li className="separator" style={{ color: "white" }}>
          |
        </li>
        <li className="nav-item dropdown">
          <Link
            href="/"
            className="nav-link dropdown-toggle"
            id="profileDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            // onClick={toggleSubMenu}
          >
            <FaUser
              style={{
                width: 13,
                height: 13,
                marginBottom: 5,
                marginLeft: 40,
              }}
            />
            <span> My Profile</span>
          </Link>

          <ul className="dropdown-menu" aria-labelledby="profileDropdown">
            <li>
              <Link href="/details" className="dropdown-item">
                Details
              </Link>
            </li>
            <li>
              <Link href="/orders" className="dropdown-item">
                Orders
              </Link>
            </li>
            <li>
              <Link href="/team-details/1" className="dropdown-item">
                Purchase
              </Link>
            </li>
            <li>
              <Link href="/price-product-type" className="dropdown-item">
                Product
              </Link>
            </li>
            <li>
              <Link href="/changepassword" className="dropdown-item">
                Change Password
              </Link>
            </li>
            <li>
              <Link href="" className="dropdown-item">
                <div style={{ color: "red" }}> Logout</div>
              </Link>
            </li>
            <h4
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                marginTop: 20,
              }}
            >
              BALANCE :
              <span
                style={{
                  color: "orange",
                  marginLeft: 5,
                }}
              >
                222
              </span>
            </h4>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
