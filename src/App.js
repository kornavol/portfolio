import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";

import { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import NavBarHor from "./components/NavBar/NavBarHor.jsx";
import About from "./pages/About/About.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";

function App() {
  const [compUpdate, setCompUpdate] = useState("");

  let history = useHistory();

  const nextPage = useSelector((state) => state.currPage);

  const elemHeight = useRef(-10); //reference to each section in order to get a rendered height

  let scrollTopRef = useRef(-1); // we can use everyting instead UNDEFINED.
  let scrollDownRef = false; // to allow onWheel action open next page

  /* To provent transport to one more page on wheel scrolling*/
  let wheelCont = 0;

  /* This aphorism is necessary, because I can get current height only after rendering and for applying, needs update state */
  const [compHeight, setCompHeight] = useState(undefined);
  const winHeight = window.innerHeight;

  function moveToNextPage(pass) {
    history.push("/" + pass);
  }

  function fromChildChng(location = "undef") {
    setTimeout(() => {
      setCompHeight(elemHeight.current.clientHeight);
      setCompUpdate(location);
      // console.log(
      //   "winheight, elemHeight",
      //   winHeight,
      //   elemHeight.current.clientHeight
      // );
      // console.log(location);
    }, 100);
  }

  function changeHeight() {
    setCompHeight(elemHeight.current.clientHeight);
  }

  function onWheel(e) {
    if (wheelCont === 0) {
      // console.log("onWheel");
      if (e.deltaY < 0) {
        // console.log(e.deltaY, "up");
        wheelCont += 1;
        setTimeout(() => {
          moveToNextPage(nextPage.upper);
        }, 300);
      } else {
        // console.log(e.deltaY, "down");
        wheelCont += 1;
        setTimeout(() => {
          moveToNextPage(nextPage.below);
        }, 300);

        // console.log(nextPage);
      }
    }
  }

  function onScroll(e) {
    let element = e.target.lastChild;
    // console.log("on Scroll is activ");

    scrollTopRef.current = element.scrollTop; //  to fire a "onWheelWthScroll" when scrollbar on a top, because in this case scroll event doesn't registred

    /* default formula to understand that page on a bottom over scrolling */
    /* 
    Needs to use this condition becouse scrollTop measured as sloat nubmer and a  calculation creates a diapason 
    "Math.floor" could't fix
    */
    if (
      element.scrollHeight - element.scrollTop >= element.clientHeight - 1 &&
      element.scrollHeight - element.scrollTop <= element.clientHeight + 1
    ) {
      scrollDownRef = true;
    }
    if (element.scrollTop === 0) {
      scrollTopRef.current = -1;
    }
  }

  /*  mounitng with onScroll and makes a transfer ot next page. It works because I wanted to transfer after a second wheel turn during scroling   */
  function onWheelWthScroll(e) {
    // console.log("second onWheel is activ");

    if (wheelCont === 0) {
      if (scrollTopRef.current == -1 && e.deltaY < 0) {
        wheelCont += 1;
        setTimeout(() => {
          moveToNextPage(nextPage.upper);
        }, 300);
      } else if (scrollDownRef && e.deltaY > 0) {
        wheelCont += 1;
        setTimeout(() => {
          moveToNextPage(nextPage.below);
        }, 300);
      }
    }
  }

  /* once for all animation, duration have to be equal the most long animation  */
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    // console.log("from useEff");

    window.addEventListener("resize", changeHeight);

    if (compHeight > winHeight) {
      window.addEventListener("scroll", onScroll);
      window.addEventListener("wheel", onWheelWthScroll);
    } else {
      window.addEventListener("wheel", onWheel);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("wheel", onWheelWthScroll);
    };
  });

  return (
    <div>
      <NavBar />
      <NavBarHor />

      <Switch>
        <Route path="/home">
          <Home elemHeight={elemHeight} parentStateUpd={fromChildChng} />
        </Route>
        <Route path="/about">
          <About elemHeight={elemHeight} parentStateUpd={fromChildChng} />
        </Route>
        <Route path="/skills">
          <Skills elemHeight={elemHeight} parentStateUpd={fromChildChng} />
        </Route>
        <Route path="/projects">
          <Portfolio elemHeight={elemHeight} parentStateUpd={fromChildChng} />
        </Route>
        <Route path="/contact">
          <Contacts elemHeight={elemHeight} parentStateUpd={fromChildChng} />
        </Route>
        <Route path="/">
          <Home elemHeight={elemHeight} parentStateUpd={fromChildChng} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
