import React from "react";

const Selection = ({
  selection,
  option,
  optionone,
  optiontwo,
  optionthree,
  normal,
}) => {
  return (
    <div>
      <div className=" w-48">
        <select className="select w-full  select-bordered">
          <option disabled selected>
            {selection}
          </option>
          <option>{option}</option>
          <option>{normal}</option>
          <option>{optionone}</option>
          <option>{optiontwo}</option>
          <option>{optionthree}</option>
        </select>
      </div>
    </div>
  );
};

export default Selection;
