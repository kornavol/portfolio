import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FP from "./components/FP/FP.jsx";
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import NavBarVer from "./components/NavBar/NavBarVer.jsx";
import About from "./components/About/About.jsx";
import Skills from './components/Skills/Skills.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Contacts from './components/Contacts/Contacts.jsx';

function App() {
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
