import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

import "./NavBar.css";
import AOS from "aos";

import { belowPage } from "../../actions";

export default function NavBar() {
  const dispatch = useDispatch();

  /* Rendering menu */
  const navArr = useSelector((state) => state.nav);
  const navDeck = [...navArr];
  const navItems = navDeck.map((item) => (
    <li key={item} className="vnav-li ">
      {/* <NavLink to={"/" + item} > */}
      <a className="vnav-link" href={"/" + item}>
        {item}
      </a>
      {/* </NavLink> */}
    </li>
  ));

  /* Send prev. and next  menu item (for scrolling) */
  let location = useLocation();
  let nextIndex = undefined;
  let prevIndex = undefined;

  /* case when pass = '/' */
  if (location.pathname.length > 1) {
    location = location.pathname.substring(1);
    nextIndex = navDeck.indexOf(location);
    prevIndex = nextIndex - 1;
    nextIndex = nextIndex + 1;
  } else {
    nextIndex = 1;
    prevIndex = navDeck.length - 1;
    console.log(navDeck.length);
  }

  if (nextIndex == navDeck.length) {
    nextIndex = 0;
  }

  if (prevIndex < 0) {
    prevIndex = navDeck.length - 1;
  }

  const nextPage = navDeck[nextIndex];
  const prevPage = navDeck[prevIndex];
  dispatch(belowPage(prevPage, nextPage));

  return (
    <div
      id="ver-nav"
      data-aos="fade-right"
      data-aos-duration={800}
      data-aos-delay={50}
      className="vertical-nav text-left "
    >
      <ul id="ver-nav" className="vertical-nav-list ">
        {navItems}
      </ul>
    </div>
  );
}
