import React from "react";

const Selection = ({
  selection,
  option,
  optionone,
  status,
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
          <option className={status}>{option}</option>
          <option className={status}>{normal}</option>
          <option>{optionone}</option>
          <option>{optiontwo}</option>
          <option>{optionthree}</option>
        </select>
      </div>
    </div>
  );
};

export default Selection;
