import React from "react";

const Child = () => {
  return <p>Child component</p>;
};

function FunctionalBasedComponent() {
  return (
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, obcaecati?
      <Child />
    </div>
  );
}

export default FunctionalBasedComponent;
