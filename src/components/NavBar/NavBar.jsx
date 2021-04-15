import {React, useEffect} from "react";
// import "./Navbar-Fixed-Side.css";
// import "./Simple-Vertical-Navigation-Menu-v-10.css";
import "./NavBar.css";

import logo from "../../assets/logo_small.png";
import { AiFillHome } from "react-icons/ai";
import AOS from 'aos';


export default function NavBar() {
  useEffect(() => {
    AOS.init({
     duration : 1000
    });
  }, []);

  return (
    <div
      id="ver-nav"
      data-aos="fade-right"
      data-aos-duration={800}
      data-aos-delay={50}
      className="vertical-nav text-left"
    >
      {/* <div style={{ margin: 0, marginTop: 6, marginLeft: 10 }}>
        <h6
          className="text-center"
          id="logo"
          style={{
            color: "var(--green)",
            fontSize: 13,
            fontFamily: "Montserrat, sans-serif",
            margin: 0,
          }}
        >Andreas
        </h6>
        <h6
          className="text-center"
          id="logo"
          style={{
            color: "var(--green)",
            fontSize: 13,
            fontFamily: "Montserrat, sans-serif",
          }}
        >
Kornblum
        </h6>
      </div> */}
      <ul className="vertical-nav-list">
        <li
          className="vnav-li"
        >
          <a className="vnav-link" href="#">
            {/* <AiFillHome/>  */}
             First
          </a>
        </li>
        <li className="vnav-li">
          <a className="vnav-link" href="#">
            <i className="fa fa-tasks"/>
            About
          </a>
        </li>
        <li className="vnav-li">
          <a className="vnav-link" href="#">
            <i className="fa fa-list-alt"/>
            Skills
          </a>
        </li>
        <li className="vnav-li">
          <a className="vnav-link" href="#">
            <i className="fa fa-gift"/>
            Project
          </a>
        </li>
        <li className="vnav-li">
          <a className="vnav-link" href="#">
            <i className="fa fa-money"/>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
