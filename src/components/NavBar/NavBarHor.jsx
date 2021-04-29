import { React, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

import "./NavBarHor.css";
import { FaBars } from "react-icons/fa";
import Button from "react-bootstrap/Button";

const NavBarver = () => {
  const [sidebar, setSidebar] = useState(false); // conditianal renderin class which shows a hides menu items

  /* renderin menu */
  const navArr = useSelector((state) => state.nav);
  const navDeck = [...navArr];
  const navItems = navDeck.map((item) => (
    <li key={item} className="nav-item mx-0 mx-lg-1 ">
      <div className="nav-link py-3 px-0 px-lg-3 rounded text-uppercase">
        <Link to={"/" + item} onClick={() => setSidebar(false)}>
          {item}
        </Link>
      </div>
    </li>
  ));

  console.log(navItems);

  return (
    <nav
      id="hor-nav"
      className="navbar navbar-light navbar-expand-lg fixed-top  text-uppercase"
    >
      <div className="container">
        <Button
          id="navBtnHor"
          data-toggle="collapse"
          target="#navbarResponsive"
          className="navbar-toggler text-white navbar-toggler-right text-uppercase rounded"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setSidebar(!sidebar)}
        >
          <FaBars />
        </Button>
        <a
          id="logoVer"
          className="navbar-brand text-white "
          href="/home"
          target="_top"
        >
          Andreas Kornblum
        </a>
        <div id="navbarResponsive" className=" navbar-collapse">
          <ul
            className={
              sidebar
                ? "visible " + "navbar-nav ml-auto"
                : "d-none " + "navbar-nav ml-auto"
            }
          >
            {navItems}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarver;
