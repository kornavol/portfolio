import React from "react";

const Skill = ({ item }) => {
  return (
    <div
      key={item.title}
      className="col-sm-6 col-md-3 col-lg-2 col-xl-1 align-self-center mb-3"
    >
      <img className="img-fluid d-block mb-2" src={item.img} />
      <span>{item.title}</span>
    </div>
  );
};

export default Skill;
