import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo_small.png";

export default function NavBar() {
  return (
    <div className="sidebar bg_primary">
      <div className="logo text-center">
        <a href="#page1">
          <img className="nav-logo text-center" src={logo} alt="logo" />
        </a>
      </div>
      <span style={{ cursor: "pointer" }} onclick="openNav()">
        ☰
      </span>
      <div className="socal_media mt_60">
        <ul>
          <li>
            <a href="#">
                Hello
              {/* <i className="fa fa-facebook" aria-hidden="true" /> */}
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-google-plus" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
