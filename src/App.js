import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FP from "./components/FP/FP.jsx";
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import NavBarVer from "./components/NavBar/NavBarVer.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import { FaWindows } from "react-icons/fa";


function App() {
  

  // useEffect(() => {
  //   onScroll();
  //   onWheel();    
  //     return removeEventListener() 
    
  // }, []);

  // const onScroll = () => {
  //   document.addEventListener("scroll", (e) => {
  //     console.log(e);
  //     isScroll = true;
  //     let element = e.target.lastChild;
  //     if (element.scrollHeight - element.scrollTop === element.clientHeight) {
  //       console.log("on the bottom");
  //     }
  //   });
  //   console.log(isScroll);
  // };

  const onWheel = () => {
    window.addEventListener("wheel", (e) => {
      console.log(e);
      if (e.deltaY < 0) {
        console.log(e.deltaY, "up");
      } else {
        console.log(e.deltaY, "down");
      }
    });
  };

  // useEffect(() => {
  //   window.addEventListener("wheel", (e) => {
  //     e.preventDefault()
  //     let element = e.target
  //     if (e.deltaY < 0) {
  //       console.log(e.deltaY, "up");

  //     } else if(element.scrollHeight - element.scrollTop === element.clientHeight) {
  //       console.log(e.deltaY, "down");

  //       // console.log(element)
  //       // console.log('scrollHeight', element.scrollHeight);
  //       // console.log('scrollTop', element.scrollTop);
  //       // console.log('clientHeight', element.clientHeight);

  //       console.log(window.innerHeight);
  //       console.log(document.documentElement.offsetHeight);
  //       // console.log(element.clientHeight );
  //     }
  //   });
  // }, []);

  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <NavBarVer />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
