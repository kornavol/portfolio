import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="text-white mb-0" id="about">
      <div className="container">
        <h2 className="text-uppercase text-center text-white mb-5">About</h2>
        {/* <hr className="star-light mb-5" /> */}
        <div className="row">
          <div className="col-lg-4 ml-auto">
            <p className="lead text-justify">
              Sodales iaculis est Scelerisque sociis magna dolor pulvinar
              magnis. Varius praesent suscipit. Donec morbi feugiat placerat
              gravida porttitor natoque nonummy parturient posuere. Magnis
              suspendisse parturient. Magna ultricies nostra nunc magna. Sodales
              etiam arcu suscipit, mollis. Aenean tempor eu ipsum nisi sociosqu
              lorem hymenaeos sapien. Aptent maecenas ac ante molestie habitant.
            </p>
          </div>
          <div className="col-lg-4 mr-auto ">
            <p className="lead text-justify">
              Duis vulputate nisi nam sem penatibus parturient volutpat justo
              phasellus. Netus. Hac montes tempor lorem tempor tincidunt
              vehicula velit. Tellus. Class aenean leo elit maecenas. Vehicula
              sagittis. Curae; eget lacus. Fames neque diam elementum risus
              eleifend dui tortor netus turpis.
            </p>
          </div>
        </div>
        <div className="text-center mt-4">
          <a className="btn btn-outline-light btn-xl" role="button" href="#">
            <i className="fa fa-download mr-2" />
            <span className="pt-1">Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
