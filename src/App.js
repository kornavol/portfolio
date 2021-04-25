import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";

import { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import NavBarVer from "./components/NavBar/NavBarVer.jsx";
import About from "./pages/About/About.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import { toBelowPage, toUpperPage } from "./actions";

function App() {
  const dispatch = useDispatch();
  const el = useRef(
    null
  ); /* reference to each section in order to get a rendered height   */
  const getHight = useSelector(
    (state) => state.sectionSelector
  ); /* getting height of current section */

  /* This aphorism is necessary, because I can get current height only after rendering and for applying, needs update state */
  const [compHeight, setCompHeight] = useState(undefined);
  const changeHeight = () => setCompHeight(getHight);

  const winHeight = window.innerHeight;

  /* once for all animation, duration have to be equal the most long animation  */
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", changeHeight);
    if (compHeight > winHeight) {
      window.addEventListener("scroll", onScroll);
    } else {
      window.addEventListener("wheel", onWheel);
    }

    changeHeight();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", changeHeight);
    };
  }, [compHeight]);

  function onWheel(e) {
    if (e.deltaY < 0) {
      console.log(e.deltaY, "up");
      setTimeout(() => {
        dispatch(toUpperPage());
      }, 300);
    } else {
      console.log(e.deltaY, "down");
      setTimeout(() => {
        dispatch(toBelowPage());
      }, 300);
    }
  }

  function onScroll(e) {
    document.addEventListener("scroll", (e) => {
      let element = e.target.lastChild;
      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        setTimeout(() => {
          dispatch(toBelowPage());
        }, 300);
      }
    });
  }

  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <NavBarVer />
        <Switch>
          <Route path="/home">
            <Home
              el={el}
            />
          </Route>
          <Route path="/about">
            <About
              el={el}
            />
          </Route>
          <Route path="/skills">
            <Skills
              el={el}
            />
          </Route>
          <Route path="/projects">
            <Portfolio
              el={el}
            />
          </Route>
          <Route path="/contact">
            <Contacts
              el={el}
            />
          </Route>
          <Route path="/">
            <Home
              el={el}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
