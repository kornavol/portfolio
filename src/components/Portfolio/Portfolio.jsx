import { React, useState } from "react";

import "./Portfolio.css";
import cabin from "../../assets/portfolio/cabin.png";
import cake from "../../assets/portfolio/cake.png";
import circus from "../../assets/portfolio/circus.png";
import game from "../../assets/portfolio/game.png";
import safe from "../../assets/portfolio/safe.png";
import submarine from "../../assets/portfolio/submarine.png";

import Project from "./Project.jsx";
import ProjectPage from './ProjectPage.jsx';

const Portfolio = () => {
  const portfolioDB = [
    {
      id: 1,
      name: "test1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      picture: cabin,
      gitLink: "https://github.com/kornavol/Task-Manager.git",
      group: "layout",
    },
    {
      id: 2,
      name: "test2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      picture: cake,
      gitLink: "",
      group: "layout",
    },
    {
      id: 3,
      name: "test3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      picture: circus,
      gitLink: "",
      group: "js",
    },
    {
      id: 4,
      name: "test4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      picture: game,
      gitLink: "",
      group: "js",
    },
    {
      id: 5,
      name: "test5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      picture: safe,
      gitLink: "",
      group: "react",
    },
    {
      id: 6,
      name: "test6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      picture: submarine,
      gitLink: "",
      group: "react",
    },
  ];

  const [selector, setSelector] = useState("all");
  const [prjPage, setPrjPage] = useState(null);
  let projects = [];

  /*TO-DO.  Scratch, needs be changEd */
  if (selector === "all") {
    projects = portfolioDB.map((item) => <Project item={item} popUp = {popUpOpener} />);
  } else {
    let a = portfolioDB.filter((item) => item.group == selector);
    projects = a.map((item) => <Project item={item} popUp = {popUpOpener} />);
  }

  function popUpOpener (e) {
    let currentId = e.currentTarget.id;
    let b = portfolioDB.filter((item) => item.id == currentId);
    let c = b[0];
    setPrjPage( <ProjectPage item={c} unmPopUp = {unmPopUp}/>);

  }

  function unmPopUp() {
    setPrjPage(null)
  }

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="text-uppercase text-center text-secondary">Portfolio</h2>
        {/* <hr className="star-dark mb-5" /> */}
        <select
          id="portfolio-filter"
          className="form-control-sm"
          value={selector}
          onChange={(e) => {
            setSelector(e.target.value);
          }}
        >
          <option value={"all"}>all</option>
          <option value={"layout"}>HTML + CSS</option>
          <option value={"js"}>JavaScript</option>
          <option value={"react"}>React</option>
        </select>
        <div className="row text-center justify-content-center align-items-center">{projects}</div>
      </div>
      {prjPage}
    </section>
  );
};

export default Portfolio;
