import React from "react";
import "../../pages/Portfolio/Portfolio.css";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const ProjectPage = ({ item, unmPopUp }) => {
    console.log(item);
    console.log(item.name);
  return (
    <div
      className="modal text-center show"
      role="dialog"
      tabIndex={-1}
      id={'project='+item.id}
      aria-model="true"
      style={{display:'block'}}
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={unmPopUp}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-uppercase text-secondary mb-3">
                    {item.name}
                  </h2>
                  {/* <hr className="star-dark mb-5" /> */}
                  <img className="img-fluid mb-5" src={item.picture} />
                  <p className="mb-2 text-justify">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
          <ul className="list-inline">
          <li className="list-inline-item" />
          <li className="list-inline-item">
            <a
              className="btn btn-outline-dark text-center btn-social rounded-circle"
              role="button"
              href={item.gitLink}
            >
              <FaGithub />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn btn-outline-dark text-center btn-social rounded-circle"
              role="button"
              href={item.gitLink}
            >
              <FaExternalLinkAlt/>
            </a>
          </li>
        </ul>
          <div className="modal-footer pb-5">
            <div
              className="btn btn-primary  btn-lg mx-auto rounded-pill portfolio-modal-dismiss"
              role="button"
              style={{backgroundColor: '#18bc9c'}}
              onClick={unmPopUp}
            >
              Close Project
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
