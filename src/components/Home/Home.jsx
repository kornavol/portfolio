import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Home.css";
import avatar from "../../assets/avatar.png";
import { FaGithub, FaLinkedinIn, FaXing } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  const onWheel = (e) => {
    if (e.deltaY < 0) {
      console.log(e.deltaY, "up");
    } else {
      console.log(e.deltaY, "down");
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", onWheel);
     return () => {window.removeEventListener("wheel", onWheel)};
  }, []);

  const onScroll = () => {
    document.addEventListener("scroll", (e) => {
      console.log(e);
      let element = e.target.lastChild;
      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        console.log("on the bottom");
      }
    });
  };

  return (
    <section
      id="home"
      className="text-center text-white masthead"
      // onWheel={() => console.log("scroll")}
    >
      <img
        className="img-fluid d-block mx-auto bounce animated mb-5"
        data-aos="zoom-out"
        data-aos-duration={800}
        src={avatar}
      />
      <div>
        <h1 className="text-uppercase">Andreas Kornblum</h1>
        {/* <hr className="star-light"/> */}
        <h2 className="font-weight-light mb-0">
          Web Developer | Product Owner
        </h2>
        <h6 className="text-uppercase font-weight-light">based in Berlin</h6>
        <ul className="list-inline">
          <li className="list-inline-item" />
          <li className="list-inline-item">
            <a
              className="btn btn-outline-light text-center btn-social rounded-circle"
              role="button"
              href="#"
            >
              <FaGithub size="1rem" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn btn-outline-light text-center btn-social rounded-circle"
              role="button"
              href="#"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn btn-outline-light text-center btn-social rounded-circle"
              role="button"
              href="#"
            >
              <FaXing />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
