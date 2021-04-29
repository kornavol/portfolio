import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";

import { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import NavBarHor from "./components/NavBar/NavBarHor.jsx";
import About from "./pages/About/About.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import { toBelowPage, toUpperPage } from "./actions";

function App() {
  const dispatch = useDispatch();
  const elemHeight = useRef(-10); //reference to each section in order to get a rendered height

  let scrollTopRef = useRef(-1); // we can use everyting instead UNDEFINED.
  let scrollDownRef = useRef(false);

  const getHight = useSelector((state) => state.sectionSelector); // getting height of current section

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

  const fromChildChg = () => {
    setTimeout(() => {
      setCompHeight(elemHeight.current.clientHeight);
      console.log("elemHeight", elemHeight.current.clientHeight);
    }, 100);
  };

  useEffect(() => {
    window.addEventListener("resize", changeHeight);

    if (compHeight > winHeight) {
      window.addEventListener("scroll", onScroll);
      window.addEventListener("wheel", onWheelTop);
    } else {
      window.addEventListener("wheel", onWheel);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", changeHeight);
      window.removeEventListener("wheel", onWheelTop);

      // scrollTop = undefined;
    };
  });

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
    let element = e.target.lastChild;
    // console.log("on Scroll is activ");

    scrollTopRef.current = element.scrollTop; //  to fire a "onWheelTop" when scrollbar on a top, because in this case scroll event doesn't registred

    /* default formula to understand that page on a bottom over scrolling */
    /* 
    Needs to use this condition becouse scrollTop measured as sloat nubmer and a  calculation creates a diapason 
    "Math.floor" could't fix
    */
    if (
      element.scrollHeight - element.scrollTop >= element.clientHeight - 1 &&
      element.scrollHeight - element.scrollTop <= element.clientHeight + 1
    ) {
      scrollDownRef.current = true;
    }
    if (element.scrollTop === 0) {
      scrollTopRef.current = -1;
    }
  }

  /*  mounitng with onScroll and makes a transfer ot next page. It works because I wanted to transfer after a second wheel turn during scroling   */
  function onWheelTop(e) {
    // console.log('second onWheel is activ');
    if (scrollTopRef.current == -1 && e.deltaY < 0) {
      setTimeout(() => {
        dispatch(toUpperPage());
      }, 300);
      console.log(e.deltaY);
    } else if (scrollDownRef.current && e.deltaY > 0) {
      setTimeout(() => {
        dispatch(toBelowPage());
      }, 300);
    }
  }

  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <NavBarHor />
        <Switch>
          <Route path="/home">
            <Home elemHeight={elemHeight} parentStateUpd={fromChildChg} />
          </Route>
          <Route path="/about">
            <About elemHeight={elemHeight} parentStateUpd={fromChildChg} />
          </Route>
          <Route path="/skills">
            <Skills elemHeight={elemHeight} parentStateUpd={fromChildChg} />
          </Route>
          <Route path="/projects">
            <Portfolio elemHeight={elemHeight} parentStateUpd={fromChildChg} />
          </Route>
          <Route path="/contact">
            <Contacts elemHeight={elemHeight} parentStateUpd={fromChildChg} />
          </Route>
          <Route path="/">
            <Home elemHeight={elemHeight} parentStateUpd={fromChildChg} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
