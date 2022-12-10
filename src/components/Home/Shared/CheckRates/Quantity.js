import React from "react";

const Quantity = () => {
  return (
    <div>
      <div className="form-control w-full items-center max-w-xs">
        <select className="select w-48 glass select-bordered">
          <option className="p-4  glass bg-stone-200 h-12 text-stone-800">
            1
          </option>
          ;
          <option className="p-4  glass bg-stone-200 h-12 text-stone-800">
            2
          </option>
          ;
          <option className="p-4  glass bg-stone-200 h-12 text-stone-800">
            3
          </option>
          ;
          <option className="p-4  glass bg-stone-200 h-12 text-stone-800">
            4
          </option>
          ;
        </select>
      </div>
    </div>
  );
};

export default Quantity;
