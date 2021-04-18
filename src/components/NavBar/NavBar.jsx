import {React, useEffect} from "react";
import "./NavBar.css";

import { AiFillHome } from "react-icons/ai";
import AOS from 'aos';
// import {NavLink} from 'react-router-dom';


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
      className="vertical-nav text-left "
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
      <ul  id="ver-nav" className="vertical-nav-list ">
        <li
          className="vnav-li"
        >
          <a className="vnav-link" href="/home">
            {/* <AiFillHome/>  */}
             home
          </a>
        </li>
        
        {/* <NavLink 
      exact
      to ="/about" 
      className ="nav-item"
      activeClassName="active"
        >about</NavLink> */}
        <li className="vnav-li">
          <a className="vnav-link" href="/about">
            <i className="fa fa-tasks"/>
            about
          </a>
        </li>
        <li className="vnav-li">
          <a className="vnav-link" href="/skills">
            <i className="fa fa-list-alt"/>
            skills
          </a>
        </li>
        <li className="vnav-li">
          <a className="vnav-link" href="/portfolio">
            <i className="fa fa-gift"/>
            projects
          </a>
        </li>
        <li className="vnav-li">
          <a className="vnav-link" href="/contacts">
            <i className="fa fa-money"/>
            contact
          </a>
        </li>
      </ul>
    </div>
  );
}
