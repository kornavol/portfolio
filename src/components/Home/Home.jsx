import React from "react";
import "./Home.css";
import avatar from "../../assets/avatar.png";
import { FaGithub, FaLinkedinIn, FaXing } from "react-icons/fa"

const Home = () => {
  return (
    <section id="home" className="text-center text-white masthead">
      <img
        className="img-fluid d-block mx-auto bounce animated mb-5"
        src={avatar}
      />
      <div>
        
        <h1 className="text-uppercase" >
          Andreas Kornblum
        </h1>
        {/* <hr className="star-light"/> */}
        <h2 className="font-weight-light mb-0" >
          Web Developer | Product Owner
        </h2>
        <h6
          className="text-uppercase font-weight-light"
        >
          based in Berlin
        </h6>
        <ul className="list-inline">
          <li className="list-inline-item" />
          <li className="list-inline-item">
            <a
              className="btn btn-outline-light text-center btn-social rounded-circle"
              role="button"
              href="#"
            >
              <FaGithub size="1rem"/>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn btn-outline-light text-center btn-social rounded-circle"
              role="button"
              href="#"
            >
              <FaLinkedinIn/>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn btn-outline-light text-center btn-social rounded-circle"
              role="button"
              href="#"
            >
              <FaXing/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
