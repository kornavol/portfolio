import "./Skills.css";
import bootstrap from "../../assets/skill-icons/bootstrap.png";
import css from "../../assets/skill-icons/css.png";
import html from "../../assets/skill-icons/html.png";
import js from "../../assets/skill-icons/js.png";
import node from "../../assets/skill-icons/node.png";
import react from "../../assets/skill-icons/react.png";
import saas from "../../assets/skill-icons/saas.png";

import { React, useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

import Skill from "../../components/Skill";

const Skills = ({elemHeight, parentStateUpd}) => {
  const skillsArr = [
    {
      title: "HTML",
      img: html,
      group: "layout",
    },
    {
      title: "JSX",
      img: react,
      group: "layout",
    },
    {
      title: "CSS",
      img: css,
      group: "layout",
    },
    {
      title: "SaaS",
      img: saas,
      group: "layout",
    },
    {
      title: "Bootstrap",
      img: bootstrap,
      group: "layout",
    },
    {
      title: "JavaScript",
      img: js,
      group: "front",
    },
    {
      title: "React",
      img: react,
      group: "front",
    },
    {
      title: "NodeJs",
      img: node,
      group: "back",
    },
  ];

  let location = useLocation();
  location = location.pathname.substring(1)

  useEffect(() => {
    parentStateUpd(location);
  });

  /*TO-DO.  Scratch, needs be changd */
  /* Rendering skills and logic selector  */
  const [selector, setSelector] = useState("all");
  let skill = [];

  if (selector === "all") {
    skill = skillsArr.map((item) => <Skill key={item.title} item={item} />);
  } else {
    let a = skillsArr.filter((item) => item.group === selector);
    skill = a.map((item) => <Skill key={item.title} item={item} />);
  }

  return (
    <section ref={elemHeight}  id="skills" className="skills">
      <div className="container">
        <h2 className="text-uppercase text-center text-secondary">skills</h2>
        {/* <hr className="star-dark mb-5" /> */}
        <form action="">
          <select
            id="skills-filter"
            className="form-control-sm"
            value={selector}
            onChange={(e) => {
              setSelector(e.target.value);
            }}
          >
            <option value={"all"}>all</option>
            <option value={"layout"}>Layout</option>
            <option value={"front"}>Front-End</option>
            <option value={"back"}>Back-End</option>
          </select>
        </form>
        <div className="row row-cols-2 text-center justify-content-center align-items-center">
          {skill}
        </div>
      </div>
    </section>
  );
};

export default Skills;
