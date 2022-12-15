import React from "react";

const Collapse = ({ name, detail }) => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse w-full m-1  collapse-arrow  bg-gray-200 "
      >
        <div className="collapse-title text-lg font-normal">{name}</div>
        <div className="collapse-content">
          <p>{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
