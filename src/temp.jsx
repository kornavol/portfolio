import { useState, useCallback } from "react";

const exampel = () => {

  const [height, setHeight] = useState(0);
  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  },);

  return <div ref={measuredRef}></div>;
};

export default exampel;
