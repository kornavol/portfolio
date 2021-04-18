import React from "react";

import "./NavBarVer.css";

import { FaBars } from "react-icons/fa"
import Button from 'react-bootstrap/Button';


const NavBarver = () => {
  return (
    <nav
      className="navbar navbar-light navbar-expand-lg fixed-top  text-uppercase"
      id="mainNav"
    >
      <div className="container">
        <Button
          id="navBtnHor"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          className="navbar-toggler text-white navbar-toggler-right text-uppercase rounded"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars/>
        </Button>
        <a
          id="logoVer"
          className="navbar-brand text-white "
          href="#page-top"
          target="_top"
        >
          Andreas Kornblum
        </a>
        <div className=" navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="/home"
              >
                Home
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="/about"
              >
                About
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="/portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="/skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarver;
