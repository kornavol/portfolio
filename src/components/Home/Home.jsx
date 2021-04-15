import React from "react";
import './Home.css';
import avatar from '../../assets/profile.png';

const Home = () => {
  return (
    <section id="home" className="text-center text-white masthead">
      <img
        className="img-fluid d-block mx-auto bounce animated mb-5"
        src={avatar}
      />
      <h1 style={{ paddingTop: 0, height: 37, fontSize: 40 }}>
        ANDREAS KORNBLUM
      </h1>
      <hr className="star-light" style={{ marginBottom: 18 }} />
      <h2 className="font-weight-light mb-0" style={{ height: 48 }}>
        Web Developer - Product Owner
      </h2>
      <h6
        className="text-uppercase font-weight-light mb-0"
        style={{ marginTop: 0 }}
      >
        based in Berlin
      </h6>
      <ul className="list-inline" style={{ marginTop: 29 }}>
        <li className="list-inline-item" />
        <li className="list-inline-item">
          <a
            className="btn btn-outline-light text-center btn-social rounded-circle"
            role="button"
            href="#"
          >
            <i className="fa fa-github fa-fw" />
          </a>
        </li>
        <li className="list-inline-item">
          <a
            className="btn btn-outline-light text-center btn-social rounded-circle"
            role="button"
            href="#"
          >
            <i className="fa fa-linkedin fa-fw" />
          </a>
        </li>
        <li className="list-inline-item">
          <a
            className="btn btn-outline-light text-center btn-social rounded-circle"
            role="button"
            href="#"
          >
            <i className="fa fa-xing fa-fw" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Home;
