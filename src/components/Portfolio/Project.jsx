import React from "react";
import { FaSearchPlus } from "react-icons/fa";

const Project = ({ item, popUp }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div
        className="d-block mx-auto portfolio-item"
        data-toggle="modal"
        id={item.id}
        key={item.id}
        onClick={(e) => popUp(e)}
      >
        <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
          <div className="text-center text-white my-auto portfolio-item-caption-content w-100">
            <FaSearchPlus size="4em" />
          </div>
        </div>
        <img className="img-fluid" src={item.picture} />
      </div>
    </div>
  );
};

export default Project;
